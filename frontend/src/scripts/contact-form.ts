document.querySelectorAll('[data-el="contact-form"]').forEach((form) =>
  form?.addEventListener("submit", async (e) => {
    e.preventDefault();
    debugger;
    const form = e.target as HTMLFormElement;
    const formMessage = document.getElementById("formMessage");
    const submitButton = form.querySelector<HTMLButtonElement>(
      'button[type="submit"]'
    );

    if (!formMessage || !submitButton) return;

    try {
      // Validate required fields
      const requiredFields = ["email", "phone", "service", "message"];
      for (const field of requiredFields) {
        const input = form.elements.namedItem(field) as
          | HTMLInputElement
          | HTMLTextAreaElement
          | HTMLSelectElement;
        if (!input.value.trim()) {
          throw new Error(
            `${field.charAt(0).toUpperCase() + field.slice(1)} is required`
          );
        }
      }

      // Validate email format
      const emailInput = form.elements.namedItem("email") as HTMLInputElement;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        throw new Error("Please enter a valid email address");
      }

      // Validate phone format (basic validation)
      const phoneInput = form.elements.namedItem("phone") as HTMLInputElement;
      const phoneRegex = /^[\d\s\-\+\(\)]{8,}$/;
      if (!phoneRegex.test(phoneInput.value)) {
        throw new Error("Please enter a valid phone number");
      }

      // Disable submit button and show loading state
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
      formMessage.className = "hidden";

      // Get form data
      const formData = new FormData(form);
      const data = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        service: formData.get("service"),
        message: formData.get("message"),
      };

      // Send form data
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      // Show success message
      formMessage.className =
        "block bg-green-100 text-green-700 p-3 rounded-md";
      formMessage.textContent =
        "Message sent successfully! We'll contact you soon.";
      form.reset();
    } catch (error) {
      // Show error message
      formMessage.className = "block bg-red-100 text-red-700 p-3 rounded-md";
      formMessage.textContent =
        error instanceof Error ? error.message : "Failed to send message";
    } finally {
      // Reset submit button
      submitButton.disabled = false;
      submitButton.textContent = "Get Free Quote";
    }
  })
);
