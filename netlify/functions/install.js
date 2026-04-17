exports.handler = async (event) => {
  const body = event.body || "";
  const method = event.httpMethod;
  const params = Object.fromEntries(new URLSearchParams(body));

  const html = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>Debug</title></head>
<body style="font-family:monospace;padding:20px">
<h3>Method: ${method}</h3>
<h3>Body params:</h3>
<pre>${JSON.stringify(params, null, 2)}</pre>
<h3>Raw body:</h3>
<pre>${body}</pre>
</body></html>`;

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
    body: html
  };
};