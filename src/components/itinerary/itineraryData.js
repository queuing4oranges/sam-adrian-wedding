// Background images for card
import prague from "/assets/images/prague01.png";
import forrest from "/assets/images/forrest.png";
import costume from "/assets/images/costume.png";
import party from "/assets/images/party.png";
import train from "/assets/images/train.png";

// Inspiration photos
import party01 from "/assets/modal-images/party01.png";
import party02 from "/assets/modal-images/party02.png";
import party03 from "/assets/modal-images/party03.png";
import party04 from "/assets/modal-images/party04.png";
import party05 from "/assets/modal-images/party05.png";
import party06 from "/assets/modal-images/party06.png";
import party07 from "/assets/modal-images/party07.png";
import party08 from "/assets/modal-images/party08.png";
import party09 from "/assets/modal-images/party09.png";
import party10 from "/assets/modal-images/party10.png";
import party11 from "/assets/modal-images/party11.png";
import party12 from "/assets/modal-images/party12.png";
import party13 from "/assets/modal-images/party13.png";
import party14 from "/assets/modal-images/party14.png";
import party15 from "/assets/modal-images/party15.png";
import party16 from "/assets/modal-images/party16.png";
import party17 from "/assets/modal-images/party17.png";
import party18 from "/assets/modal-images/party18.png";
import party19 from "/assets/modal-images/party19.png";
import shrek01 from "/assets/modal-images/shrek01.png";
import shrek02 from "/assets/modal-images/shrek02.png";
import shrek03 from "/assets/modal-images/shrek03.png";

export const itineraryData = [
	{
		day: "1",
		date: "Monday, Sept 8",
		title: "Welcome to Prague.",
		description: "We will spend the day exploring Old Town, discovering Prague highlights, and uncovering our favorite hidden gems.",
		note: "This is mandatory for our friends flying in from the US! Join Adrian and Sam for a day tour of Prague, where we'll explore the city together. We'll also enjoy a relaxed evening with typical Czech food, and for those interested, some delicious local beer.",
		imageUrl: prague
	},
	{
		day: "2",
		date: "Tuesday, Sept 9",
		title: "Travel to the woods (train or carpool) for games and fun in a cottage retreat.",
		description: "We'll be leaving Prague around 11 a.m. and expect to arrive at the cottage around 2 p.m. The train ride takes about 1.5 hours, while the drive by car is about 1 hour. Some of us will need to take the train, and Sam will be leading the ride, which promises to be both fun and relaxing. Expect games and a casual dinner at the cottage! ",
		note: "You can sign up to volunteer your car via the RSVP form.",
		imageUrl: forrest
	},
	{
		day: "3",
		date: "Wednesday, Sept 10",
		title: "Formal day: Dress elegantly and party in style.",
		description: "We can't wait to celebrate with you! Expect an evening with great music, dancing, and plenty of laughter. Dress code is Cocktail or Creative Black Tie. The current start time is set for 4 p.m., but if anything changes, we will be sure to keep you updated.",
		note: "We have photos available for reference, but they're just examples—feel free to be comfortable and have fun putting together stylish outfits that reflect your unique flair. We know you'll look fantastic!",
		imageUrl: party,
		inspirationUrl: [party01, party02, party03, party04, party05, party06, party07, party08, party09, party10, party11, party12, party13, party14, party15, party16, party17, party18, party19]
	},
	{
		day: "4",
		date: "Thursday, Sept 11",
		title: "Themed party: Go hard or go home with your best Shrek-inspired outfits!",
		description:"For our Shrek costume party, you're welcome to dress up as any character you love—none are off-limits! Adrian has chosen to go as Lord Farquaad, and Sam will be Princess Fiona. Don't worry about duplicates—we're more than happy to have multiple versions of the same costume. Feel free to pick any character that inspires you!",
		note: "Dressing up is mandatory! You can reference the photos for inspiration, and there will even be a competition.",
		imageUrl: costume,
		inspirationUrl: [shrek01, shrek02, shrek03]
	},
	{
		day: "5",
		date:"Friday, Sept 12",
		title: "Departure back to Prague.",
		description: "We are going to check out at 11 a.m. and are heading back to Prague by car or train.",
		note: "Anyone still in town and interested can continue to hang with us, we can continue to explore Prague as there is much to see and do!",
		imageUrl: train
	}
]
