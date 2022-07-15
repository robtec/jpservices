import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest = mailchannelsPlugin({
  personalizations: [
    {
      to: [
            {   
                email: "rob.p.tec@gmail.com" 
            }
        ],
    },
  ],
  from: 
    {   
        email: "enquiries@jpservices.ie" 
    },
  respondWith: () =>
    new Response(null, {
      status: 302,
      headers: { Location: "/thankyou" },
    }),
});