const invoiceTemplate = ({ userName, ticket, date, movie, chair }) => {
  const template = `<h1> Hi ${userName},</h1>
    <br />

    <h4>Thanks for using Cinema. This email is the ticket for your movie.</h4>
    <hr />
    <b>
    Ticket: ${ticket} <br /> <br />
    Hour: ${new Date(date).toLocaleString()} <br /> <br />
    Movie: ${movie} <br /> <br />
    Chair: ${chair}
    </b>
    <hr />
    If you have any questions about this receipt, simply reply to this email or reach out to our support team for help.
    
    <h3> Without further ado, enjoy your movie! </h3>
    Cheers,
    The <b>Cinema</b> Team`;
  return template;
};

export {
  invoiceTemplate
}