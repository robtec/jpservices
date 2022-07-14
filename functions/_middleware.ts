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
        email: "website@jpservices.ie" 
    },
  subject: "Customer Enquiry",
  
  respondWith: () => {
  return new Response(
    `Thank you for submitting your enquiry. A member of the team will be in touch shortly.\n Return to https://jpservices.ie`
  );
  },
});
