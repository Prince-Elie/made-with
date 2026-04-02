import type { NextApiRequest, NextApiResponse } from 'next';

type Response = { message: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body as { email?: string };

  if (!email || !EMAIL_RE.test(email)) {
    return res.status(400).json({ message: 'Adresse email invalide.' });
  }

  // TODO: connecter à un service d'emailing (Resend, Mailchimp, ConvertKit…)
  // Exemple avec Resend :
  // await resend.contacts.create({ email, audienceId: process.env.RESEND_AUDIENCE_ID });

  console.log(`New newsletter subscriber: ${email}`);

  return res.status(200).json({ message: 'Merci ! Vous êtes maintenant abonné(e).' });
}
