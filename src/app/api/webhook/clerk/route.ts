import { clerkClient } from '@clerk/nextjs';
import { WebhookEvent } from '@clerk/nextjs/server';

export async function POST(request: Request) {
  const payload: WebhookEvent = await request.json();

  switch (payload.type) {
    case 'user.created':
      await clerkClient.users.updateUserMetadata(payload.data.id, {
        publicMetadata: {
          role: 'user',
        },
      });

    default:
      break;
  }

  return Response.json({ message: 'Received' });
}

export async function GET() {
  return Response.json({ message: 'Hello World!' });
}
