import { createRequire } from 'module'

const require = createRequire(import.meta.url)

// eslint-config-next 16 ships native flat config (CommonJS array).
const nextCoreWebVitals = require('eslint-config-next/core-web-vitals')

const eslintConfig = [
  {
    ignores: [
      'bonik-react/**',
      '.next/**',
      'node_modules/**',
      'out/**',
      'public/**',
    ],
  },
  ...nextCoreWebVitals,
  {
    // Keep lint useful during the framework upgrade without blocking on
    // pre-existing template patterns.
    rules: {
      '@next/next/no-img-element': 'off',
      'react/no-unescaped-entities': 'off',
    },
  },
]

export default eslintConfig
