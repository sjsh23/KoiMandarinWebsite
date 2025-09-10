export default async function handler(req, res) {
  try {
    // if (req.method !== 'POST') {
    //   return res.status(405).json({ error: 'Method not allowed' });
    // }

    // if (!process.env.APPS_SCRIPT_WEB_APP_URL) {
    //   throw new Error('APPS_SCRIPT_WEB_APP_URL is not set');
    // }

    console.log('📥 Incoming request body:', req.body);

    const response = await fetch("/apps-script", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();
    console.log('📩 Google Apps Script raw response:', text);

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { raw: text };
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('❌ API Error:', error);
    res.status(500).json({ error: error.message || 'Something went wrong' });
  }
}
