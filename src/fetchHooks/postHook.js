export default async function postHook(url, body) {
  let response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  let data = await response.json();
  if (response.status === 200) {
    return { sucess: data.message };
  } else if (response.status === 201) {
    return { warning: data.message };
  } else {
    return { error: data.message };
  }
}
