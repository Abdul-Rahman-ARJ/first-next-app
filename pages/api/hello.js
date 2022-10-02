// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    let data = req.body;
    // console.log(typeof data)
    res.status(200).json(data)
  } else {
    res.status(200).json({ type: req.method })
    // Handle any other HTTP method
  }
}

