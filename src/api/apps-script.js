export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbzmnS1q2rE_cVYdRcD7IpNiBmhSslExX-cSbiPnFusy7B6IARDmn2NNMFFncBY4Fj_qIA/exec"

    const googleRes = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    })

    const text = await googleRes.text()

    // Try to parse JSON, fallback to plain text
    let data
    try {
      data = JSON.parse(text)
    } catch (e) {
      console.error("Non-JSON from Apps Script:", text)
      return res.status(500).json({
        error: "Apps Script did not return valid JSON",
        raw: text,
      })
    }

    return res.status(200).json(data)
  } catch (error) {
    console.error("Error contacting Apps Script:", error)
    return res.status(500).json({ error: "Failed to contact Apps Script" })
  }
}
