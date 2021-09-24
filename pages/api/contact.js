const mailchimpTx = require("@mailchimp/mailchimp_transactional")(
  "e18b20718a3c663183824a963088f58f-us5"
);

export default async (req, res) => {
  console.log(req.body)
  const { name, email, number, subject, text } = req.body;
  const message = {
    from_email: email,
    subject: subject,
    text: `My name is ${name}, phone: ${number}

        ${text}
        `,
    to: [
      {
        email: "sam@seolo.ca",
        type: "to",
      },
    ],
  };

  try {
    const response = await mailchimpTx.messages.send({
      message,
    });
    //console.log(response);
    res.status(200).send("Email send successfully");
  } catch (error) {
    //console.log(error);
    res.status(500).send("Error proccessing charge");
  }
};
