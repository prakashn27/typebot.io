import { authenticatedProcedure } from '@/helpers/server/trpc'
import { z } from 'zod'

export const getBillingPortalUrl = authenticatedProcedure
  .meta({
    openapi: {
      method: 'GET',
      path: '/v1/billing/subscription/portal',
      protect: true,
      summary: 'Get Stripe billing portal URL',
      tags: ['Billing'],
    },
  })
  .input(
    z.object({
      workspaceId: z.string(),
    })
  )
  .output(
    z.object({
      billingPortalUrl: z.string(),
    })
  )
