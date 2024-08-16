import Card from "react-bootstrap/Card";
import PageNavigation from "../components/PageNavigation";
import "../AboutUs.css";

function AboutUs() {
  return (
    <>
      <Card className="bg-dark text-white">
        <Card.Img
          src="https://www.firstevent.co.uk/wp-content/uploads/2023/10/AIBlog.png"
          alt="Card image"
          style={{ width: "100%", height: "100vh" }}
        />

        <Card.ImgOverlay>
          <PageNavigation />
          <br />
          <div className="aboutus">
            <Card.Title>WELCOME TO THE TOP EVENTS APP!!</Card.Title>

            <div className="aboutus-text">
              <Card.Text>
                Welcome to Epic Events.This is your one-stop-shop for all your
                event ticketing needs. Our app provides a seamless way for users
                to discover, buy, and sell tickets to upcoming events. Whether
                you're an event organizer looking to sell tickets to your event
                or an attendee searching for the next big thing, our app has got
                you covered. Easy Ticket Buying With Epic Events, buying tickets
                to your favorite events has never been easier. Browse through
                our extensive list of upcoming events, select your desired
                event, and purchase tickets in just a few taps. Our app ensures
                a secure and hassle-free transaction process, so you can focus
                on what matters most - enjoying the event! Add Your Own Event
                Are you an event organizer looking to promote your event and
                sell tickets? Look no further! Our app allows you to easily add
                your own event, set ticket prices, and track sales in real-time.
                With our user-friendly interface, you can create an event
                listing in minutes and start selling tickets right away. Why
                Choose Epic Events ?Low Ticket Fees: We offer competitive ticket
                fees, ensuring that you get the best value for your money. Easy
                Event Management: Our app provides a simple and intuitive way to
                manage your events, from creating listings to tracking sales.
                Secure Transactions: Our app ensures a secure and reliable
                transaction process, so you can focus on enjoying the event. Get
                Started Today! Download Epic Events now and start discovering,
                buying, and selling tickets to upcoming
              </Card.Text>
            </div>
          </div>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}

export default AboutUs;
