import { authenticatedProcedure } from '@/helpers/server/trpc'
import { z } from 'zod'

export const createCustomCheckoutSession = authenticatedProcedure
  .meta({
    openapi: {
      method: 'POST',
      path: '/v1/billing/subscription/custom-checkout',
      protect: true,
      summary:
        'Create custom checkout session to make a workspace pay for a custom plan',
      tags: ['Billing'],
    },
  })
  .input(
    z.object({
      email: z.string(),
      workspaceId: z.string(),
      returnUrl: z.string(),
    })
  )
  .output(
    z.object({
      checkoutUrl: z.string(),
    })
  )
