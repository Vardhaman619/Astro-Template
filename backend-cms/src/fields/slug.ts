import type { Field } from 'payload'

import type { FieldHook } from 'payload'
/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item: unknown): boolean {
  return Boolean(item && typeof item === 'object' && !Array.isArray(item))
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
//@ts-expect-error ignore this
function deepMerge(obj1, obj2) {
  const output = { ...obj1 }

  for (const key in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj2, key)) {
      if (typeof obj2[key] === 'object' && !Array.isArray(obj2[key]) && obj1[key]) {
        output[key] = deepMerge(obj1[key], obj2[key])
      } else {
        output[key] = obj2[key]
      }
    }
  }

  return output
}
const format = (val: string): string =>
  val
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .toLowerCase()

const getNestedValue = (obj: any, path: string): any => {
  return path.split('.').reduce((acc, key) => acc?.[key], obj);
};
const formatSlug =
  (fallback: string): FieldHook =>
    ({ data, operation, originalDoc, value }) => {
      if (typeof value === 'string') {
        return format(value)
      }

      if (operation === 'create') {

        const fallbackData = getNestedValue(data, fallback) || getNestedValue(originalDoc, fallback)

        if (fallbackData && typeof fallbackData === 'string') {
          return format(fallbackData)
        }
      }

      return value
    }


type Slug = (fieldToUse?: string, overrides?: Partial<Field>) => Field

export const slugField: Slug = (fieldToUse = 'title', overrides = {}) =>
  deepMerge(
    {
      name: 'slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [formatSlug(fieldToUse)],
      },
      index: true,
      label: 'Slug',
    },
    overrides,
  )
