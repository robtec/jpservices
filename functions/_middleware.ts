import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

let body = "";

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
        email: "no-reply@jpservices.ie" 
    },
  subject: "Test Subject",
  
  respondWith: () => {
  return new Response(
    `Thank you for submitting your enquiry. A member of the team will be in touch shortly.`
  );
  },
});
