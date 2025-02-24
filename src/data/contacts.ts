import ppGirl1 from "@/assets/images/profile-picture-girl-1.jpeg";
import ppGirl2 from "@/assets/images/profile-picture-girl-2.jpeg";
import ppGirl3 from "@/assets/images/profile-picture-girl-3.jpeg";
import ppGirl4 from "@/assets/images/profile-picture-girl-4.jpeg";
import ppBoy1 from "@/assets/images/profile-picture-boy-1.jpeg";
import ppBoy2 from "@/assets/images/profile-picture-boy-2.jpeg";
import ppBoy3 from "@/assets/images/profile-picture-boy-3.jpeg";
import placeholderChatImage from "@/assets/images/women.jpeg";
import type { StaticImageData } from "next/image";
import {v4 as uuidv4} from 'uuid';
import { isMessageRead } from "@/utils/messages";
import signatures from "@/assets/images/signatures.jpg";
import solidarity from "@/assets/images/solidarity.png";
import kenny1 from "@/assets/images/kendrick-1.webp";
import kenny2 from "@/assets/images/kendrick-2.jpeg";
import damn from "@/assets/images/damn.png";
import tpab from "@/assets/images/tpab.png";
import dialectics1 from "@/assets/images/dialetics-1.jpg";
import dialectics2 from "@/assets/images/dialectic-helix.jpg";

export type Message = {
	content?: string;
	images: StaticImageData[];
	sender: string | null;
	sent: Date;
	received: Date;
	read: Date;
};

export type User = {
	id: string;
	profile_picture: StaticImageData;
	name: string;
	phone_number: string;
	// whatsapp_name: string;
	messages: Message[];
	group: boolean;
	typing: boolean;
};

const userUUIDs = Array.from({ length: 9 }, () => uuidv4());
export const pinnedUserUUIDs = [userUUIDs[0]];
const baseTime = new Date("2023-10-10T09:00:00.000Z");

function addMinutes(date: Date, minutes: number): Date {
  return new Date(date.getTime() + minutes * 60 * 1000);
}

const users: User[] = [
	{
		id: userUUIDs[0],
		profile_picture: ppGirl3,
		name: "💗",
		phone_number: "+2348123456789",
		// whatsapp_name: "Beyonce",
		messages: [
			{
				content: "Hey love, I've been thinking about how far we've come. Do you ever think about the personal stuff we had to work through before us?",
				images: [],
				sender: null,
				sent: new Date("2023-10-20T19:00:00Z"),
				received: new Date("2023-10-20T19:01:00Z"),
				read: new Date("2023-10-20T19:02:00Z")
			},
			{
				content: "All the time. Honestly, I don't think we'd be here if we hadn't grown so much as individuals first. Remember when we first met?",
				images: [],
				sender: userUUIDs[0],
				sent: new Date("2023-10-20T19:03:00Z"),
				received: new Date("2023-10-20T19:04:00Z"),
				read: new Date("2023-10-20T19:05:00Z")
			},
			{
				content: "Of course! Back then, I was still figuring out my own insecurities and trust issues from past relationships. It wasn't easy.",
				images: [],
				sender: null,
				sent: new Date("2023-10-20T19:06:00Z"),
				received: new Date("2023-10-20T19:07:00Z"),
				read: new Date("2023-10-20T19:08:00Z")
			},
			{
				content: "Yeah, and me too. I struggled with self-doubt and fear of vulnerability. Opening up felt terrifying at first. But I knew I needed to change for myself—and for us.",
				images: [],
				sender: userUUIDs[0],
				sent: new Date("2023-10-20T19:09:00Z"),
				received: new Date("2023-10-20T19:10:00Z"),
				read: new Date("2023-10-20T19:11:00Z")
			},
			{
				content: "That's true. We both had to learn how to prioritize our mental health and communicate better. Therapy really helped me understand where my fears came from.",
				images: [],
				sender: null,
				sent: new Date("2023-10-20T19:12:00Z"),
				received: new Date("2023-10-20T19:13:00Z"),
				read: new Date("2023-10-20T19:14:00Z")
			},
			{
				content: "Same here. Journaling and meditation were huge for me. They gave me space to process things without judgment. It took time, but it was worth it.",
				images: [],
				sender: userUUIDs[0],
				sent: new Date("2023-10-20T19:15:00Z"),
				received: new Date("2023-10-20T19:16:00Z"),
				read: new Date("2023-10-20T19:17:00Z")
			},
			{
				content: "And now look at us! We're not just partners; we're each other's biggest supporters. You always encourage me to keep growing, even when it's hard.",
				images: [],
				sender: null,
				sent: new Date("2023-10-20T19:18:00Z"),
				received: new Date("2023-10-20T19:19:00Z"),
				read: new Date("2023-10-20T19:20:00Z")
			},
			{
				content: "Exactly! And you do the same for me. Together, we push each other to be better versions of ourselves. That's what makes this relationship special.",
				images: [],
				sender: userUUIDs[0],
				sent: new Date("2023-10-20T19:21:00Z"),
				received: new Date("2023-10-20T19:22:00Z"),
				read: new Date("2023-10-20T19:23:00Z")
			},
			{
				content: "It's like we built a foundation of mutual respect and understanding. Even when we disagree, we handle it with care because we know how far we've come.",
				images: [],
				sender: null,
				sent: new Date("2023-10-20T19:24:00Z"),
				received: new Date("2023-10-20T19:25:00Z"),
				read: new Date("2023-10-20T19:26:00Z")
			},
			{
				content: "Totally agree. And it's not just about fixing our flaws—it's embracing who we are while continuing to grow together. You inspire me every day.",
				images: [],
				sender: userUUIDs[0],
				sent: new Date("2023-10-20T19:27:00Z"),
				received: new Date("2023-10-20T19:28:00Z"),
				read: new Date("2023-10-20T19:29:00Z")
			},
			{
				content: "Aww, that means so much to me. You inspire me just as much. Here's to keeping that growth mindset and supporting each other no matter what comes our way.",
				images: [],
				sender: null,
				sent: new Date("2023-10-20T19:30:00Z"),
				received: new Date("2023-10-20T19:31:00Z"),
				read: new Date("2023-10-20T19:32:00Z")
			},
			{
				content: "Here's to us! 💕 Let's keep building on this amazing thing we've created together.",
				images: [],
				sender: userUUIDs[0],
				sent: new Date("2023-10-20T19:33:00Z"),
				received: new Date("2023-10-20T19:34:00Z"),
				read: new Date("2023-10-20T19:35:00Z")
			}
		].sort((a, b) => a.sent.getTime() - b.sent.getTime()),
			group: false,
		typing: false,
	},
	{
		id: userUUIDs[1],
		profile_picture: ppGirl2,
		name: "Karen Okonkwo",
		phone_number: "+2348123456789",
		// whatsapp_name: "Karen O.",
		messages: [
			{
				content: "Hey! I've been thinking about starting weightlifting, but not for muscle or strength. What are some other benefits?",
				images: [],
				sender: userUUIDs[1],
				sent: new Date("2023-10-19T18:00:00Z"),
				received: new Date("2023-10-19T18:01:00Z"),
				read: new Date("2023-10-19T18:02:00Z")
			},
			{
				content: "Oh, that's awesome! There are so many benefits beyond just building muscle. For one, it strengthens your bones significantly.",
				images: [],
				sender: null,
				sent: new Date("2023-10-19T18:03:00Z"),
				received: new Date("2023-10-19T18:04:00Z"),
				read: new Date("2023-10-19T18:05:00Z")
			},
			{
				content: "Really? How does it help with bone strength?",
				images: [],
				sender: userUUIDs[1],
				sent: new Date("2023-10-19T18:06:00Z"),
				received: new Date("2023-10-19T18:07:00Z"),
				read: new Date("2023-10-19T18:08:00Z")
			},
			{
				content: "Weight-bearing exercises like lifting stimulate bone growth by increasing bone density. This is especially important as we age to prevent osteoporosis.",
				images: [],
				sender: null,
				sent: new Date("2023-10-19T18:09:00Z"),
				received: new Date("2023-10-19T18:10:00Z"),
				read: new Date("2023-10-19T18:11:00Z")
			},
			{
				content: "That's really cool. Are there any immune system benefits too?",
				images: [],
				sender: userUUIDs[1],
				sent: new Date("2023-10-19T18:12:00Z"),
				received: new Date("2023-10-19T18:13:00Z"),
				read: new Date("2023-10-19T18:14:00Z")
			},
			{
				content: "Yes, actually! Regular exercise—including weightlifting—can boost your immune function by improving circulation and reducing inflammation in the body.",
				images: [],
				sender: null,
				sent: new Date("2023-10-19T18:15:00Z"),
				received: new Date("2023-10-19T18:16:00Z"),
				read: new Date("2023-10-19T18:17:00Z")
			},
			{
				content: "Wow, I didn't know that. And what about mental health? Does it help with stress or anxiety?",
				images: [],
				sender: userUUIDs[1],
				sent: new Date("2023-10-19T18:18:00Z"),
				received: new Date("2023-10-19T18:19:00Z"),
				read: new Date("2023-10-19T18:20:00Z")
			},
			{
				content: "Absolutely! Lifting weights releases endorphins, which improve mood and reduce stress. Plus, setting small goals and achieving them can be incredibly empowering.",
				images: [],
				sender: null,
				sent: new Date("2023-10-19T18:21:00Z"),
				received: new Date("2023-10-19T18:22:00Z"),
				read: new Date("2023-10-19T18:23:00Z")
			},
			{
				content: "I could use more of that empowerment stuff. Anything else you'd recommend focusing on?",
				images: [],
				sender: userUUIDs[1],
				sent: new Date("2023-10-19T18:24:00Z"),
				received: new Date("2023-10-19T18:25:00Z"),
				read: new Date("2023-10-19T18:26:00Z")
			},
			{
				content: "Definitely focus on form first—it prevents injuries and ensures you're working the right muscles. Also, consistency is key. Even light sessions twice a week can make a big difference over time.",
				images: [],
				sender: null,
				sent: new Date("2023-10-19T18:27:00Z"),
				received: new Date("2023-10-19T18:28:00Z"),
				read: new Date("2023-10-19T18:29:00Z")
			},
			{
				content: "Good tip. Do you think it helps with sleep quality too?",
				images: [],
				sender: userUUIDs[1],
				sent: new Date("2023-10-19T18:30:00Z"),
				received: new Date("2023-10-19T18:31:00Z"),
				read: new Date("2023-10-19T18:32:00Z")
			},
			{
				content: "It definitely can! Physical activity regulates your circadian rhythm and promotes deeper, more restorative sleep. Just try not to lift too close to bedtime if possible.",
				images: [],
				sender: null,
				sent: new Date("2023-10-19T18:33:00Z"),
				received: new Date("2023-10-19T18:34:00Z"),
				read: new Date("2023-10-19T18:35:00Z")
			},
			{
				content: "Got it. Last question—does it have any impact on energy levels during the day?",
				images: [],
				sender: userUUIDs[1],
				sent: new Date("2023-10-19T18:36:00Z"),
				received: new Date("2023-10-19T18:37:00Z"),
				read: new Date("2023-10-19T18:38:00Z")
			},
			{
				content: "Yes, regular weightlifting boosts your metabolism and increases overall energy levels. You might feel tired after a session, but long-term, you'll notice improved stamina.",
				images: [],
				sender: null,
				sent: new Date("2023-10-19T18:39:00Z"),
				received: new Date("2023-10-19T18:40:00Z"),
				read: new Date("2023-10-19T18:41:00Z")
			},
			{
				content: "This all sounds amazing. Thanks for explaining everything so clearly—I'm excited to give it a shot!",
				images: [],
				sender: userUUIDs[1],
				sent: new Date("2023-10-19T18:42:00Z"),
				received: new Date("2023-10-19T18:43:00Z"),
				read: new Date("2023-10-19T18:44:00Z")
			},
			{
				content: "You're welcome! Let me know how it goes. Remember, start slow and build up gradually. 💪",
				images: [],
				sender: null,
				sent: new Date("2023-10-19T18:45:00Z"),
				received: new Date("2023-10-19T18:46:00Z"),
				read: new Date("2023-10-19T18:47:00Z")
			}
		].sort((a, b) => a.sent.getTime() - b.sent.getTime()),
			group: false,
		typing: false,
	},
	{
		id: userUUIDs[2],
		profile_picture: ppGirl1,
		name: "Tamara Livingstone",
		phone_number: "+2348123456789",
		// whatsapp_name: "titi123",
		messages: [
			{
			  content: "Girl, did you hear we finally got enough signatures for the union?",
				images: [signatures],
				sender:  userUUIDs[2],
			  sent: addMinutes(baseTime, 0),
			  received: addMinutes(baseTime, 0),
			  read: addMinutes(baseTime, 0),
			},
			{
			  content: "Honey, I am living for this news! It’s about time we stand up for ourselves.",
				images: [],
				sender:  null,
			  sent: addMinutes(baseTime, 3),
			  received: addMinutes(baseTime, 3),
			  read: addMinutes(baseTime, 3),
			},
			{
			  content: "Exactly! I'm tired of those subpar benefits and nonexistent raises.",
				images: [],
				sender:  userUUIDs[2],
			  sent: addMinutes(baseTime, 6),
			  received: addMinutes(baseTime, 6),
			  read: addMinutes(baseTime, 6),
			},
			{
			  content: "Preach! My spa fund is non-existent with these checks.",
				images: [],
				sender:  null,
			  sent: addMinutes(baseTime, 9),
			  received: addMinutes(baseTime, 9),
			  read: addMinutes(baseTime, 9),
			},
			{
			  content: "Now, we can finally negotiate for better wages and more PTO.",
				images: [],
				sender:  userUUIDs[2],
			  sent: addMinutes(baseTime, 12),
			  received: addMinutes(baseTime, 12),
			  read: addMinutes(baseTime, 12),
			},
			{
			  content: "Ooh, yes PTO! I could use a vacation in Mykonos, dear.",
				images: [],
				sender:  null,
			  sent: addMinutes(baseTime, 15),
			  received: addMinutes(baseTime, 15),
			  read: addMinutes(baseTime, 15),
			},
			{
			  content: "Mykonos? Try a whole month of island-hopping with proper union benefits!",
				images: [],
				sender:  userUUIDs[2],
			  sent: addMinutes(baseTime, 18),
			  received: addMinutes(baseTime, 18),
			  read: addMinutes(baseTime, 18),
			},
			{
			  content: "Haha, you know that’s right! We deserve it for all our hard work.",
				images: [],
				sender:  null,
			  sent: addMinutes(baseTime, 21),
			  received: addMinutes(baseTime, 21),
			  read: addMinutes(baseTime, 21),
			},
			{
			  content: "For real. Management can’t ignore us as a group anymore.",
				images: [],
				sender:  userUUIDs[2],
			  sent: addMinutes(baseTime, 24),
			  received: addMinutes(baseTime, 24),
			  read: addMinutes(baseTime, 24),
			},
			{
			  content: "They’ll have to see the receipts. We have every right to better conditions.",
				images: [],
				sender:  null,
			  sent: addMinutes(baseTime, 27),
			  received: addMinutes(baseTime, 27),
			  read: addMinutes(baseTime, 27),
			},
			{
			  content: "And we are definitely capable of serving up those receipts, sweetie.",
				images: [],
				sender:  userUUIDs[2],
			  sent: addMinutes(baseTime, 30),
			  received: addMinutes(baseTime, 30),
			  read: addMinutes(baseTime, 30),
			},
			{
			  content: "So, who’s heading the negotiations? I hope we have some real fire there.",
				images: [],
				sender:  null,
			  sent: addMinutes(baseTime, 33),
			  received: addMinutes(baseTime, 33),
			  read: addMinutes(baseTime, 33),
			},
			{
			  content: "Malik from Accounting. He’s fierce enough to scare the suits.",
				images: [],
				sender:  userUUIDs[2],
			  sent: addMinutes(baseTime, 36),
			  received: addMinutes(baseTime, 36),
			  read: addMinutes(baseTime, 36),
			},
			{
			  content: "Good. I want them quaking in their boots when we lay out our demands.",
				images: [],
				sender:  null,
			  sent: addMinutes(baseTime, 39),
			  received: addMinutes(baseTime, 39),
			  read: addMinutes(baseTime, 39),
			},
			{
			  content: "Same here. I'll bring the receipts, the bullet points, and the spreadsheets.",
				images: [],
				sender:  userUUIDs[2],
			  sent: addMinutes(baseTime, 42),
			  received: addMinutes(baseTime, 42),
			  read: addMinutes(baseTime, 42),
			},
			{
			  content: "Oooh, get ‘em! Let’s make them realize we’re not playing games.",
				images: [],
				sender:  null,
			  sent: addMinutes(baseTime, 45),
			  received: addMinutes(baseTime, 45),
			  read: addMinutes(baseTime, 45),
			},
			{
			  content: "Once we seal this deal, I’m celebrating with the biggest brunch.",
				images: [],
				sender:  userUUIDs[2],
			  sent: addMinutes(baseTime, 48),
			  received: addMinutes(baseTime, 48),
			  read: addMinutes(baseTime, 48),
			},
			{
			  content: "Count me in, and I’m ordering bottomless mimosas. No regrets.",
				images: [],
				sender:  null,
			  sent: addMinutes(baseTime, 51),
			  received: addMinutes(baseTime, 51),
			  read: addMinutes(baseTime, 51),
			},
			{
			  content: "You know it. Let’s keep the momentum going until then.",
				images: [],
				sender:  userUUIDs[2],
			  sent: addMinutes(baseTime, 54),
			  received: addMinutes(baseTime, 54),
			  read: addMinutes(baseTime, 54),
			},
			{
			  content: "Absolutely. Unions unite, honey. We’re unstoppable!",
				images: [],
				sender:  null,
			  sent: addMinutes(baseTime, 57),
			  received: addMinutes(baseTime, 57),
			  read: addMinutes(baseTime, 57),
			},
		  ].sort((a, b) => a.sent.getTime() - b.sent.getTime()),
			group: false,
		typing: false,
	},
	{
		id: userUUIDs[3],
		profile_picture: ppBoy2,
		name: "Isabella Martinez",
		phone_number: "+2348123456789",
		// whatsapp_name: "David",
		messages: [
			{
				content: "Mija, have you seen the news about the wildfires in California? 😰 It's getting worse every year. Que tristeza.",
				images: [],
				sender: null,
				sent: new Date("2023-10-15T14:00:00Z"),
				received: new Date("2023-10-15T14:01:00Z"),
				read: new Date("2023-10-15T14:02:00Z")
			},
			{
				content: "Sí, saw it! I can't even... why do they keep letting corporations pollute so much? This is not just 'individual choices,' amiga. 🌍",
				images: [],
				sender: userUUIDs[3],
				sent: new Date("2023-10-15T14:03:00Z"),
				received: new Date("2023-10-15T14:04:00Z"),
				read: new Date("2023-10-15T14:05:00Z")
			},
			{
				content: "Exactly! Like, how many times are we gonna hear 'use less plastic' or 'recycle more'? That's such a small part of the problem. The real issue is systemic, mmmh?",
				images: [],
				sender: null,
				sent: new Date("2023-10-15T14:06:00Z"),
				received: new Date("2023-10-15T14:07:00Z"),
				read: new Date("2023-10-15T14:08:00Z")
			},
			{
				content: "OMG yes. Capitalism is literally killing the planet and they still act like everything is fine if we just buy reusable straws. Ugh. 🤦‍♀️",
				images: [],
				sender: userUUIDs[3],
				sent: new Date("2023-10-15T14:09:00Z"),
				received: new Date("2023-10-15T14:10:00Z"),
				read: new Date("2023-10-15T14:11:00Z")
			},
			{
				content: "It's infuriating. And don't get me started on these greenwashing campaigns. They make it seem like buying eco-friendly products will save us when it's really about profit for them.",
				images: [],
				sender: null,
				sent: new Date("2023-10-15T14:12:00Z"),
				received: new Date("2023-10-15T14:13:00Z"),
				read: new Date("2023-10-15T14:14:00Z")
			},
			{
				content: "Right?! Like, no one talks about how oil companies spend billions lobbying against climate policies while pretending to care about sustainability. It's disgusting.",
				images: [],
				sender: userUUIDs[3],
				sent: new Date("2023-10-15T14:15:00Z"),
				received: new Date("2023-10-15T14:16:00Z"),
				read: new Date("2023-10-15T14:17:00Z")
			},
			{
				content: "And what about all the indigenous communities being displaced by mining and deforestation? Their voices are always ignored until it's too late. We need justice, not charity.",
				images: [],
				sender: null,
				sent: new Date("2023-10-15T14:18:00Z"),
				received: new Date("2023-10-15T14:19:00Z"),
				read: new Date("2023-10-15T14:20:00Z")
			},
			{
				content: "Absolutely. Environmental racism is real, and it affects marginalized folks first and worst. Why isn't this front-page news??",
				images: [],
				sender: userUUIDs[3],
				sent: new Date("2023-10-15T14:21:00Z"),
				received: new Date("2023-10-15T14:22:00Z"),
				read: new Date("2023-10-15T14:23:00Z")
			},
			{
				content: "Because media is controlled by the same people profiting from destruction, duh. But honestly, I'm tired of waiting for politicians to fix things. What can WE do?",
				images: [],
				sender: null,
				sent: new Date("2023-10-15T14:24:00Z"),
				received: new Date("2023-10-15T14:25:00Z"),
				read: new Date("2023-10-15T14:26:00Z")
			},
			{
				content: "Same here. I think organizing locally could help—like supporting grassroots movements that focus on renewable energy and protecting land rights. You know, actual change.",
				images: [],
				sender: userUUIDs[3],
				sent: new Date("2023-10-15T14:27:00Z"),
				received: new Date("2023-10-15T14:28:00Z"),
				read: new Date("2023-10-15T14:29:00Z")
			},
			{
				content: "Ooooh, there’s this group near me working on stopping a pipeline project. Maybe we should look into joining something like that together?",
				images: [],
				sender: null,
				sent: new Date("2023-10-15T14:30:00Z"),
				received: new Date("2023-10-15T14:31:00Z"),
				read: new Date("2023-10-15T14:32:00Z")
			},
			{
				content: "That sounds perfect! Let me check out their website and see when their next meeting is. Also, maybe we can start sharing info with our friends/family? Educate as we go.",
				images: [],
				sender: userUUIDs[3],
				sent: new Date("2023-10-15T14:33:00Z"),
				received: new Date("2023-10-15T14:34:00Z"),
				read: new Date("2023-10-15T14:35:00Z")
			},
			{
				content: "Yes, education is key. A lot of people don't realize how interconnected all these issues are. Climate change isn't just about polar bears—it's about human lives too.",
				images: [],
				sender: null,
				sent: new Date("2023-10-15T14:36:00Z"),
				received: new Date("2023-10-15T14:37:00Z"),
				read: new Date("2023-10-15T14:38:00Z")
			},
			{
				content: "So true. Alright, let's do this. Together, we can make some noise and demand better for our future. 💪🌍",
				images: [],
				sender: userUUIDs[3],
				sent: new Date("2023-10-15T14:39:00Z"),
				received: new Date("2023-10-15T14:40:00Z"),
				read: new Date("2023-10-15T14:41:00Z")
			},
			{
				content: "Definitely, Isa. Let's be the change we want to see. Gracias por siempre having my back on this stuff. Te quiero mucho!",
				images: [],
				sender: null,
				sent: new Date("2023-10-15T14:42:00Z"),
				received: new Date("2023-10-15T14:43:00Z"),
				read: new Date("2023-10-15T14:44:00Z")
			},
			{
				content: "Of course, Mari! Same here. Let's keep fighting for what's right. 💖",
				images: [solidarity],
				sender: userUUIDs[3],
				sent: new Date("2023-10-15T14:45:00Z"),
				received: new Date("2023-10-15T14:46:00Z"),
				read: new Date("2023-10-15T14:47:00Z")
			}
		].sort((a, b) => a.sent.getTime() - b.sent.getTime()),
			group: false,
		typing: false,
	},

	{
		id: userUUIDs[4],
		profile_picture: ppBoy1,
		name: "Daniel Oladeji",
		phone_number: "+2348123456789",
		// whatsapp_name: "Beyonce",
		messages: [
			{
				content: "Hey! I've been hearing a lot about Kendrick Lamar. Why do people think he's the GOAT?",
				images: [kenny1, kenny2],
				sender: userUUIDs[4],
				sent: new Date("2023-10-18T15:00:00Z"),
				received: new Date("2023-10-18T15:01:00Z"),
				read: new Date("2023-10-18T15:02:00Z")
			},
			{
				content: "Oh man, where do I even start?! Kendrick is more than just a rapper—he’s an artist who pushes boundaries lyrically, thematically, and musically.",
				images: [],
				sender: null,
				sent: new Date("2023-10-18T15:03:00Z"),
				received: new Date("2023-10-18T15:04:00Z"),
				read: new Date("2023-10-18T15:05:00Z")
			},
			{
				content: "Like what? Can you give me some examples?",
				images: [],
				sender: userUUIDs[4],
				sent: new Date("2023-10-18T15:06:00Z"),
				received: new Date("2023-10-18T15:07:00Z"),
				read: new Date("2023-10-18T15:08:00Z")
			},
			{
				content: "Sure! Take *To Pimp a Butterfly*. It’s not just an album; it’s a masterpiece that tackles race, identity, mental health, and systemic oppression—all with incredible wordplay and storytelling.",
				images: [tpab],
				sender: null,
				sent: new Date("2023-10-18T15:09:00Z"),
				received: new Date("2023-10-18T15:10:00Z"),
				read: new Date("2023-10-18T15:11:00Z")
			},
			{
				content: "That sounds deep. But how does he stand out compared to other rappers like J. Cole or Drake?",
				images: [],
				sender: userUUIDs[4],
				sent: new Date("2023-10-18T15:12:00Z"),
				received: new Date("2023-10-18T15:13:00Z"),
				read: new Date("2023-10-18T15:14:00Z")
			},
			{
				content: "Great question. While J. Cole focuses on personal narratives and societal issues, Kendrick has this ability to blend intricate metaphors with dense lyrical layers. And unlike Drake, whose style leans toward pop appeal, Kendrick stays rooted in raw, unfiltered storytelling.",
				images: [],
				sender: null,
				sent: new Date("2023-10-18T15:15:00Z"),
				received: new Date("2023-10-18T15:16:00Z"),
				read: new Date("2023-10-18T15:17:00Z")
			},
			{
				content: "I see. What about his Pulitzer Prize? Some people say it was controversial...",
				images: [],
				sender: userUUIDs[4],
				sent: new Date("2023-10-18T15:18:00Z"),
				received: new Date("2023-10-18T15:19:00Z"),
				read: new Date("2023-10-18T15:20:00Z")
			},
			{
				content: "Ah, yes. The Pulitzer for *DAMN.* was groundbreaking because it marked the first time a non-jazz or classical music project won in the Music category. They recognized its artistic depth and cultural significance.",
				images: [damn],
				sender: null,
				sent: new Date("2023-10-18T15:21:00Z"),
				received: new Date("2023-10-18T15:22:00Z"),
				read: new Date("2023-10-18T15:23:00Z")
			},
			{
				content: "But why *DAMN.* specifically? Wasn’t *To Pimp a Butterfly* better?",
				images: [],
				sender: userUUIDs[4],
				sent: new Date("2023-10-18T15:24:00Z"),
				received: new Date("2023-10-18T15:25:00Z"),
				read: new Date("2023-10-18T15:26:00Z")
			},
			{
				content: "*TPAB* is undeniably iconic, but *DAMN.* showcased Kendrick at his most vulnerable yet confident. Tracks like 'HUMBLE.' and 'DNA.' are anthems, while songs like 'FEAR.' delve into existential themes. It’s balanced brilliance.",
				images: [],
				sender: null,
				sent: new Date("2023-10-18T15:27:00Z"),
				received: new Date("2023-10-18T15:28:00Z"),
				read: new Date("2023-10-18T15:29:00Z")
			},
			{
				content: "That makes sense. So, would you say his lyrics set him apart from others?",
				images: [],
				sender: userUUIDs[4],
				sent: new Date("2023-10-18T15:30:00Z"),
				received: new Date("2023-10-18T15:31:00Z"),
				read: new Date("2023-10-18T15:32:00Z")
			},
			{
				content: "Absolutely. Kendrick’s wordplay is unmatched. He can pack multiple meanings into one line. For example, in 'Alright,' the phrase 'We gon' be alright' becomes both a hopeful mantra and a critique of complacency.",
				images: [],
				sender: null,
				sent: new Date("2023-10-18T15:33:00Z"),
				received: new Date("2023-10-18T15:34:00Z"),
				read: new Date("2023-10-18T15:35:00Z")
			},
			{
				content: "Wow, I never thought about it that way. Do you think anyone else could rival him as the GOAT?",
				images: [],
				sender: userUUIDs[4],
				sent: new Date("2023-10-18T15:36:00Z"),
				received: new Date("2023-10-18T15:37:00Z"),
				read: new Date("2023-10-18T15:38:00Z")
			},
			{
				content: "It’s hard to say. Artists like Nas, Jay-Z, and Tupac have their own legacies, but Kendrick brings something unique—a modern voice that resonates globally while staying true to hip-hop roots.",
				images: [],
				sender: null,
				sent: new Date("2023-10-18T15:39:00Z"),
				received: new Date("2023-10-18T15:40:00Z"),
				read: new Date("2023-10-18T15:41:00Z")
			},
			{
				content: "Fair point. Thanks for breaking it down for me—I’ll definitely revisit his discography now!",
				images: [],
				sender: userUUIDs[4],
				sent: new Date("2023-10-18T15:42:00Z"),
				received: new Date("2023-10-18T15:43:00Z"),
				read: new Date("2023-10-18T15:44:00Z")
			},
			{
				content: "You’re welcome! Trust me, there’s always something new to discover in Kendrick’s work. Let me know your thoughts after listening. 🎧🔥",
				images: [],
				sender: null,
				sent: new Date("2023-10-18T15:45:00Z"),
				received: new Date("2023-10-18T15:46:00Z"),
				read: new Date("2023-10-18T15:47:00Z")
			}
		].sort((a, b) => a.sent.getTime() - b.sent.getTime()),
			group: false,
		typing: false,
	},
	{
		id: userUUIDs[5],
		profile_picture: ppBoy3,
		name: "Albert Einstein",
		phone_number: "+2348123456789",
		// whatsapp_name: "Chris",
		messages: [
			{
				content: "Hi friend, I've been reading Engels lately, and it made me think about how dialectical materialism could apply to our understanding of nature. What do you think?",
				images: [dialectics1],
				sender: userUUIDs[5],
				sent: new Date("2023-10-16T09:00:00Z"),
				received: new Date("2023-10-16T09:05:00Z"),
				read: new Date("2023-10-16T09:10:00Z")
			},
			{
				content: "Albert! That's an interesting thought. Dialectical materialism... isn't that more related to social sciences? How does it connect with physics?",
				images: [],
				sender: null,
				sent: new Date("2023-10-16T09:15:00Z"),
				received: new Date("2023-10-16T09:20:00Z"),
				read: new Date("2023-10-16T09:25:00Z")
			},
			{
				content: "Exactly! At first glance, it seems distant from natural sciences. But consider this: Engels talks about the interplay of opposites and transformation of quantity into quality.",
				images: [],
				sender: userUUIDs[5],
				sent: new Date("2023-10-16T09:30:00Z"),
				received: new Date("2023-10-16T09:35:00Z"),
				read: new Date("2023-10-16T09:40:00Z")
			},
			{
				content: "In physics, we see similar ideas—like particles and antiparticles, or even wave-particle duality. These seem like opposing forces that coexist in a dynamic balance.",
				images: [dialectics2],
				sender: userUUIDs[5],
				sent: new Date("2023-10-16T09:45:00Z"),
				received: new Date("2023-10-16T09:50:00Z"),
				read: new Date("2023-10-16T09:55:00Z")
			},
			{
				content: "Hmm, that’s intriguing. So you're suggesting that these philosophical concepts can help us frame complex phenomena in science? Like seeing contradictions as part of the process?",
				images: [],
				sender: null,
				sent: new Date("2023-10-16T10:00:00Z"),
				received: new Date("2023-10-16T10:05:00Z"),
				read: new Date("2023-10-16T10:10:00Z")
			},
			{
				content: "Precisely! Take thermodynamics, for example. The tension between order and chaos leads to emergent properties—like how molecules arrange themselves under certain conditions.",
				images: [],
				sender: userUUIDs[5],
				sent: new Date("2023-10-16T10:15:00Z"),
				received: new Date("2023-10-16T10:20:00Z"),
				read: new Date("2023-10-16T10:25:00Z")
			},
			{
				content: "And what about quantum mechanics? Could dialectical materialism offer insights there? After all, uncertainty principles suggest a constant interplay between knowns and unknowns.",
				images: [],
				sender: null,
				sent: new Date("2023-10-16T10:30:00Z"),
				received: new Date("2023-10-16T10:35:00Z"),
				read: new Date("2023-10-16T10:40:00Z")
			},
			{
				content: "Ah, yes! Quantum mechanics is fascinating in this context. It shows how small-scale interactions lead to large-scale transformations—a perfect illustration of quantity turning into quality.",
				images: [],
				sender: userUUIDs[5],
				sent: new Date("2023-10-16T10:45:00Z"),
				received: new Date("2023-10-16T10:50:00Z"),
				read: new Date("2023-10-16T10:55:00Z")
			},
			{
				content: "But doesn't dialectical materialism imply some sort of determinism? Isn't that at odds with probabilistic interpretations in quantum theory?",
				images: [],
				sender: null,
				sent: new Date("2023-10-16T11:00:00Z"),
				received: new Date("2023-10-16T11:05:00Z"),
				read: new Date("2023-10-16T11:10:00Z")
			},
			{
				content: "Not necessarily. Determinism in dialectical materialism doesn't mean rigidity—it emphasizes processes and development through contradiction. In quantum terms, perhaps probability itself arises from underlying tensions.",
				images: [],
				sender: userUUIDs[5],
				sent: new Date("2023-10-16T11:15:00Z"),
				received: new Date("2023-10-16T11:20:00Z"),
				read: new Date("2023-10-16T11:25:00Z")
			},
			{
				content: "That's a bold claim, Albert! Are you saying that randomness might have deeper structural causes waiting to be uncovered?",
				images: [],
				sender: null,
				sent: new Date("2023-10-16T11:30:00Z"),
				received: new Date("2023-10-16T11:35:00Z"),
				read: new Date("2023-10-16T11:40:00Z")
			},
			{
				content: "Perhaps. Or maybe randomness is simply another manifestation of the dialectical principle—that opposites are constantly interacting and shaping reality.",
				images: [],
				sender: userUUIDs[5],
				sent: new Date("2023-10-16T11:45:00Z"),
				received: new Date("2023-10-16T11:50:00Z"),
				read: new Date("2023-10-16T11:55:00Z")
			},
			{
				content: "This gives me so much to think about. Do you believe this perspective could guide future research in unifying theories across different scales?",
				images: [],
				sender: null,
				sent: new Date("2023-10-16T12:00:00Z"),
				received: new Date("2023-10-16T12:05:00Z"),
				read: new Date("2023-10-16T12:10:00Z")
			},
			{
				content: "I certainly hope so. By embracing contradictions rather than shying away from them, we may uncover hidden truths about the universe. 🌌",
				images: [],
				sender: userUUIDs[5],
				sent: new Date("2023-10-16T12:15:00Z"),
				received: new Date("2023-10-16T12:20:00Z"),
				read: new Date("2023-10-16T12:25:00Z")
			},
			{
				content: "Fascinating stuff, Albert. Let's keep discussing—I feel like we've only scratched the surface here!",
				images: [],
				sender: null,
				sent: new Date("2023-10-16T12:30:00Z"),
				received: new Date("2023-10-16T12:35:00Z"),
				read: new Date("2023-10-16T12:40:00Z")
			},
			{
				content: "Agreed! Science thrives on dialogue and exploration. Here's to many more conversations ahead! 💡",
				images: [],
				sender: userUUIDs[5],
				sent: new Date("2023-10-16T12:45:00Z"),
				received: new Date("2023-10-16T12:50:00Z"),
				read: new Date("2023-10-16T12:55:00Z")
			}
		].sort((a, b) => a.sent.getTime() - b.sent.getTime()),
			group: false,
		typing: false,
	},

	{
		id: userUUIDs[6],
		profile_picture: ppGirl3,
		name: "Sara Naidu",
		phone_number: "+2348123456789",
		// whatsapp_name: "Karen",
		messages: [
			{
				content: "Hi, Dr! It's lovely to connect with you. I've always admired how psychology and Buddhism both aim to understand the mind. What are your thoughts on that?",
				images: [],
				sender: userUUIDs[6],
				sent: new Date("2023-10-17T14:00:00Z"),
				received: new Date("2023-10-17T14:01:00Z"),
				read: new Date("2023-10-17T14:02:00Z")
			},
			{
				content: "Hello Sara! That's such a beautiful observation. Psychology focuses on understanding emotions, behaviors, and mental processes through empirical research, while Buddhism explores these same phenomena through meditation and mindfulness. They're complementary!",
				images: [],
				sender: null,
				sent: new Date("2023-10-17T14:03:00Z"),
				received: new Date("2023-10-17T14:04:00Z"),
				read: new Date("2023-10-17T14:05:00Z")
			},
			{
				content: "Exactly! In Buddhism, we talk about impermanence and the nature of suffering (*dukkha*). It resonates with psychological concepts like attachment and cognitive distortions.",
				images: [],
				sender: userUUIDs[6],
				sent: new Date("2023-10-17T14:06:00Z"),
				received: new Date("2023-10-17T14:07:00Z"),
				read: new Date("2023-10-17T14:08:00Z")
			},
			{
				content: "That's fascinating. Attachment theory in psychology also highlights how clinging to certain relationships or outcomes can lead to emotional pain. Both fields encourage letting go for healthier mental states.",
				images: [],
				sender: null,
				sent: new Date("2023-10-17T14:09:00Z"),
				received: new Date("2023-10-17T14:10:00Z"),
				read: new Date("2023-10-17T14:11:00Z")
			},
			{
				content: "Yes, and mindfulness practices help cultivate awareness without judgment—similar to how therapists guide clients to observe their thoughts objectively. Would you agree?",
				images: [],
				sender: userUUIDs[6],
				sent: new Date("2023-10-17T14:12:00Z"),
				received: new Date("2023-10-17T14:13:00Z"),
				read: new Date("2023-10-17T14:14:00Z")
			},
			{
				content: "Absolutely! Mindfulness is increasingly integrated into therapeutic approaches like MBCT (Mindfulness-Based Cognitive Therapy) and ACT (Acceptance and Commitment Therapy). It helps people develop resilience and clarity.",
				images: [],
				sender: null,
				sent: new Date("2023-10-17T14:15:00Z"),
				received: new Date("2023-10-17T14:16:00Z"),
				read: new Date("2023-10-17T14:17:00Z")
			},
			{
				content: "It's wonderful to see modern psychology embracing ancient wisdom. The concept of *anicca* (impermanence) aligns well with the idea that our emotions and thoughts are transient—they come and go like clouds in the sky.",
				images: [],
				sender: userUUIDs[6],
				sent: new Date("2023-10-17T14:18:00Z"),
				received: new Date("2023-10-17T14:19:00Z"),
				read: new Date("2023-10-17T14:20:00Z")
			},
			{
				content: "True! Accepting impermanence can reduce anxiety about change. Similarly, in therapy, we often work with clients to reframe rigid thinking patterns and embrace life's uncertainties.",
				images: [],
				sender: null,
				sent: new Date("2023-10-17T14:21:00Z"),
				received: new Date("2023-10-17T14:22:00Z"),
				read: new Date("2023-10-17T14:23:00Z")
			},
			{
				content: "And compassion plays a key role in both traditions. Loving-kindness (*metta*) meditation fosters empathy and connection, much like how therapists create safe spaces for clients to express themselves freely.",
				images: [],
				sender: userUUIDs[6],
				sent: new Date("2023-10-17T14:24:00Z"),
				received: new Date("2023-10-17T14:25:00Z"),
				read: new Date("2023-10-17T14:26:00Z")
			},
			{
				content: "Completely agree. Empathy and unconditional positive regard are foundational in psychotherapy. When combined with self-compassion, it creates a powerful framework for healing and growth.",
				images: [],
				sender: null,
				sent: new Date("2023-10-17T14:27:00Z"),
				received: new Date("2023-10-17T14:28:00Z"),
				read: new Date("2023-10-17T14:29:00Z")
			},
			{
				content: "Isn't it amazing how two seemingly different paths converge at the heart of human experience? Both emphasize understanding ourselves better so we can live more harmoniously.",
				images: [],
				sender: userUUIDs[6],
				sent: new Date("2023-10-17T14:30:00Z"),
				received: new Date("2023-10-17T14:31:00Z"),
				read: new Date("2023-10-17T14:32:00Z")
			},
			{
				content: "Indeed! Whether through scientific inquiry or spiritual practice, the goal is ultimately the same—to alleviate suffering and promote well-being. It's inspiring to find common ground between our disciplines.",
				images: [],
				sender: null,
				sent: new Date("2023-10-17T14:33:00Z"),
				received: new Date("2023-10-17T14:34:00Z"),
				read: new Date("2023-10-17T14:35:00Z")
			},
			{
				content: "Let's continue this dialogue sometime soon. Exploring these intersections enriches my understanding and practice. Thank you for sharing your insights, Dr. Claire!",
				images: [],
				sender: userUUIDs[6],
				sent: new Date("2023-10-17T14:36:00Z"),
				received: new Date("2023-10-17T14:37:00Z"),
				read: new Date("2023-10-17T14:38:00Z")
			},
			{
				content: "I'd love that, Sara. Your perspective adds depth to mine, and I deeply appreciate the opportunity to learn from you. Until next time—may we both continue growing in wisdom and kindness! 🙏",
				images: [],
				sender: null,
				sent: new Date("2023-10-17T14:39:00Z"),
				received: new Date("2023-10-17T14:40:00Z"),
				read: new Date("2023-10-17T14:41:00Z")
			}
		].sort((a, b) => a.sent.getTime() - b.sent.getTime()),
			group: false,
		typing: false,
	},

	{
		id: userUUIDs[7],
		profile_picture: ppGirl4,
		name: "Lisa Simpson",
		phone_number: "+2348123456789",
		// whatsapp_name: "Beyonce",
		messages: [
			{
				content: "Hey there! I'm Lisa Simpson. I heard you're new at Springfield Elementary? Welcome!",
				images: [],
				sender: userUUIDs[7],
				sent: new Date("2023-10-15T16:00:00Z"),
				received: new Date("2023-10-15T16:01:00Z"),
				read: new Date("2023-10-15T16:02:00Z")
			},
			{
				content: "Thanks! Yeah, just moved here last week. It's... interesting so far. 😅 Name's Alex.",
				images: [],
				sender: null,
				sent: new Date("2023-10-15T16:03:00Z"),
				received: new Date("2023-10-15T16:04:00Z"),
				read: new Date("2023-10-15T16:05:00Z")
			},
			{
				content: "Interesting is one way to put it! Anyway, I wanted to talk about activism. Have you ever been involved in anything like that?",
				images: [],
				sender: userUUIDs[7],
				sent: new Date("2023-10-15T16:06:00Z"),
				received: new Date("2023-10-15T16:07:00Z"),
				read: new Date("2023-10-15T16:08:00Z")
			},
			{
				content: "A little bit. Mostly environmental stuff back home. Why do you ask?",
				images: [],
				sender: null,
				sent: new Date("2023-10-15T16:09:00Z"),
				received: new Date("2023-10-15T16:10:00Z"),
				read: new Date("2023-10-15T16:11:00Z")
			},
			{
				content: "Well, I've tried my best to bring awareness to issues here in Springfield—like saving the wetlands or fighting pollution from Mr. Burns' plant.",
				images: [],
				sender: userUUIDs[7],
				sent: new Date("2023-10-15T16:12:00Z"),
				received: new Date("2023-10-15T16:13:00Z"),
				read: new Date("2023-10-15T16:14:00Z")
			},
			{
				content: "And how’s that going? Sounds tough...",
				images: [],
				sender: null,
				sent: new Date("2023-10-15T16:15:00Z"),
				received: new Date("2023-10-15T16:16:00Z"),
				read: new Date("2023-10-15T16:17:00Z")
			},
			{
				content: "It definitely has its challenges. Some people think I’m too idealistic, and others don’t take me seriously because I’m young. But I keep trying!",
				images: [],
				sender: userUUIDs[7],
				sent: new Date("2023-10-15T16:18:00Z"),
				received: new Date("2023-10-15T16:19:00Z"),
				read: new Date("2023-10-15T16:20:00Z")
			},
			{
				content: "That must be frustrating. Do you feel like you’ve made any progress though?",
				images: [],
				sender: null,
				sent: new Date("2023-10-15T16:21:00Z"),
				received: new Date("2023-10-15T16:22:00Z"),
				read: new Date("2023-10-15T16:23:00Z")
			},
			{
				content: "Definitely some small wins! Like when we got the town council to ban plastic bags—or at least reduce their use. Baby steps, but they count.",
				images: [],
				sender: userUUIDs[7],
				sent: new Date("2023-10-15T16:24:00Z"),
				received: new Date("2023-10-15T16:25:00Z"),
				read: new Date("2023-10-15T16:26:00Z")
			},
			{
				content: "That’s awesome! Every little bit helps, right?",
				images: [],
				sender: null,
				sent: new Date("2023-10-15T16:27:00Z"),
				received: new Date("2023-10-15T16:28:00Z"),
				read: new Date("2023-10-15T16:29:00Z")
			},
			{
				content: "Exactly! And honestly, once I head off to college, I hope to expand my reach even more. There’s so much work to be done globally.",
				images: [],
				sender: userUUIDs[7],
				sent: new Date("2023-10-15T16:30:00Z"),
				received: new Date("2023-10-15T16:31:00Z"),
				read: new Date("2023-10-15T16:32:00Z")
			},
			{
				content: "What kind of major are you thinking about pursuing?",
				images: [],
				sender: null,
				sent: new Date("2023-10-15T16:33:00Z"),
				received: new Date("2023-10-15T16:34:00Z"),
				read: new Date("2023-10-15T16:35:00Z")
			},
			{
				content: "I’m leaning toward Environmental Science or Political Science. Both seem crucial for creating real change.",
				images: [],
				sender: userUUIDs[7],
				sent: new Date("2023-10-15T16:36:00Z"),
				received: new Date("2023-10-15T16:37:00Z"),
				read: new Date("2023-10-15T16:38:00Z")
			},
			{
				content: "Those sound perfect for what you’re passionate about. Are there specific schools you’re looking at?",
				images: [],
				sender: null,
				sent: new Date("2023-10-15T16:39:00Z"),
				received: new Date("2023-10-15T16:40:00Z"),
				read: new Date("2023-10-15T16:41:00Z")
			},
			{
				content: "A few! Yale is high on my list—they have great programs for both fields. Plus, Bart keeps bugging me to apply to MIT, so maybe I’ll check that out too.",
				images: [],
				sender: userUUIDs[7],
				sent: new Date("2023-10-15T16:42:00Z"),
				received: new Date("2023-10-15T16:43:00Z"),
				read: new Date("2023-10-15T16:44:00Z")
			},
			{
				content: "Wow, those are amazing options! You’ll crush it wherever you go.",
				images: [],
				sender: null,
				sent: new Date("2023-10-15T16:45:00Z"),
				received: new Date("2023-10-15T16:46:00Z"),
				read: new Date("2023-10-15T16:47:00Z")
			},
			{
				content: "Thanks, Alex! That means a lot. By the way, if you ever want to join forces on any projects here in Springfield, let me know!",
				images: [],
				sender: userUUIDs[7],
				sent: new Date("2023-10-15T16:48:00Z"),
				received: new Date("2023-10-15T16:49:00Z"),
				read: new Date("2023-10-15T16:50:00Z")
			},
			{
				content: "For sure! Let’s make Springfield—and the world—a better place together. 🌍",
				images: [],
				sender: null,
				sent: new Date("2023-10-15T16:51:00Z"),
				received: new Date("2023-10-15T16:52:00Z"),
				read: new Date("2023-10-15T16:53:00Z")
			},
			{
				content: "Absolutely! 💪 Looking forward to it.",
				images: [],
				sender: userUUIDs[7],
				sent: new Date("2023-10-15T16:54:00Z"),
				received: new Date("2023-10-15T16:55:00Z"),
				read: new Date("2023-10-15T16:56:00Z")
			}
		].sort((a, b) => a.sent.getTime() - b.sent.getTime()),
		group: false,
		typing: false,
	},
];

export default users;
