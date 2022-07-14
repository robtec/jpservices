import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

let body = "";

export const onRequest = mailchannelsPlugin({
  personalizations: [
    {
      to: [
            {   name: "Customer Callback",
                email: "rob.p.tec@gmail.com" 
            }
        ],
    },
  ],
  from: { name: "Enquiry", email: "no-reply@jpservices.ie" },
  subject: "Test Subject",
    content: [{
        "type": "text/plain",
        "value": "Test message content\n\n" + body,
    }],
  respondWith: () =>
    new Response(null, {
      status: 302,
      headers: { Location: "/thank-you" },
    }),
});
