import type { TextField } from 'payload';
export const Color = (overrides?: Omit<TextField, 'type'>): TextField => {
    const { name = 'color', label, admin, ...rest } = overrides ?? {};

    return {
        type: 'text',
        name,
        label,
        admin: {
            ...admin,
            components: {
                Field: '@/components/color-picker',
            },
        },
        ...rest,
    } as TextField;
};