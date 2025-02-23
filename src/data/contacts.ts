import ppGirl1 from "@/assets/images/profile-picture-girl-1.jpeg";
import ppGirl2 from "@/assets/images/profile-picture-girl-2.jpeg";
import ppGirl3 from "@/assets/images/profile-picture-girl-3.jpeg";
import ppGirl4 from "@/assets/images/profile-picture-girl-4.jpeg";
import ppBoy1 from "@/assets/images/profile-picture-boy-1.jpeg";
import ppBoy2 from "@/assets/images/profile-picture-boy-2.jpeg";
import ppBoy3 from "@/assets/images/profile-picture-boy-3.jpeg";
import type { StaticImageData } from "next/image";

const sentences = [
	"Ooooh. That seems interesting. Tell me more!",
	"Joyce enjoyed eating pancakes with ketchup.",
	"It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die.	It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die.",
	"At that moment he wasn't listening to music, he was living an experience.",
	"The clock within this blog and the clock on my laptop are 1 hour different from each other.",
	"They ran around the corner to find that they had traveled back in time.",
	"Please put on these earmuffs because I can't you hear.",
	"All she wanted was the answer, but she had no idea how much she would hate it. It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die.",
	"He enjoys practicing his ballet in the bathroom.",
	"Can we go to the park .",
	"Where is the orange cat? Said the big black dog.",
	"We can make the bird fly away if we jump on something.",
	"We can go down to the store with the dog. It is not too far away.",
	"My big yellow cat ate the little black bird.",
	"I like to read my book at school.",
	"We are going to swim at the park. It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die. It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die.",
	"They improved dramatically once the lead singer left. ",
	"I hear that Nancy is very pretty. ",
	"Sometimes you have to just give up and win by cheating.",
	"Blue sounded too cold at the time and yet it seemed to work for gin.",
	"The green tea and avocado smoothie turned out exactly as would be expected.",
	"In that instant, everything changed. ",
	"I currently have 4 windows open up… and I don’t know why.",
	"Gary didn't understand why Doug went upstairs to get one dollar bills when he invited him to go cow tipping.",
	"The shark-infested South Pine channel was the only way in or out.",
	"When he asked her favorite number, she answered without hesitation that it was diamonds.",
	"She insisted that cleaning out your closet was the key to good driving.",
	"He invested some skill points in Charisma and Strength. It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die. It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die.",
	"Mary realized if her calculator had a history, it would be more embarrassing than her computer browser history.",
	"Cats are good pets, for they are clean and are not noisy.",
	"It's much more difficult to play tennis with a bowling ball than it is to bowl with a tennis ball.",
	"There are over 500 starfish in the bathroom drawer.",
	"The murder hornet was disappointed by the preconceived ideas people had of him.",
	"It's not often you find a soggy banana on the street.",
	"The Japanese yen for commerce is still well-known.",
	"Shakespeare was a famous 17th-century diesel mechanic. It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die.",
	"He decided to live his life by the big beats manifesto.",
	"The bees decided to have a mutiny against their queen.",
	"His confidence would have bee admirable if it wasn't for his stupidity. It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die.",
	"He strives to keep the best lawn in the neighborhood.",
	"Carol drank the blood as if she were a vampire.",
	"Dan ate the clouds like cotton candy.",
	"He went on a whiskey diet and immediately lost three days.",
	"That is an appealing treasure map that I can't read. It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die.",
	"Henry couldn't decide if he was an auto mechanic or a priest.",
	"The small white buoys marked the location of hundreds of crab pots.",
	"Don't step on the broken glass.",
	"Her scream silenced the rowdy teenagers.",
];

const getRandomSentence = () => {
	const randomIndex = Math.floor(Math.random() * sentences.length);
	const sentence = sentences[randomIndex];
	return sentence;
};

export type Message = {
	content?: string;
	image?: boolean;
	sender: number | null;
	time: string;
	status: string | null;
};

export interface Messages {
	[key: string]: Message[];
}

export type User = {
	id: number;
	profile_picture: StaticImageData;
	name: string;
	phone_number: string;
	whatsapp_name: string;
	unread: number;
	messages: Messages;
	group: boolean;
	pinned: boolean;
	typing: boolean;
};

const users: User[] = [
	{
		id: 1,
		profile_picture: ppGirl3,
		name: "Love of my life ❤️💜",
		phone_number: "+2348123456789",
		whatsapp_name: "Beyonce",
		unread: 3,
		messages: {
			"04/06/2021": [
				{
					content: getRandomSentence(),
					sender: 1,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 1,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			YESTERDAY: [
				{
					content: getRandomSentence(),
					sender: 1,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 1,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			TODAY: [
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:10:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: 1,
					time: "08:11:26",
					status: null,
				},
				{
					image: true,
					sender: 1,
					time: "09:12:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:12:45",
					status: "read",
				},
				{
					image: true,
					sender: null,
					time: "09:13:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: 1,
					time: "09:20:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: 1,
					time: "09:21:26",
					status: null,
				},
			],
		},
		group: false,
		pinned: true,
		typing: false,
	},
	{
		id: 2,
		profile_picture: ppGirl2,
		name: "Karen Okonkwo",
		phone_number: "+2348123456789",
		whatsapp_name: "Karen O.",
		unread: 0,
		messages: {
			"04/06/2021": [
				{
					content: getRandomSentence(),
					sender: 2,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 2,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			YESTERDAY: [
				{
					content: getRandomSentence(),
					sender: 2,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 2,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			TODAY: [
				{
					content: getRandomSentence(),
					sender: 2,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 2,
					time: "09:11:26",
					status: null,
				},
			],
		},
		group: false,
		pinned: false,
		typing: false,
	},
	{
		id: 3,
		profile_picture: ppGirl1,
		name: "Titilayo Bello",
		phone_number: "+2348123456789",
		whatsapp_name: "titi123",
		unread: 0,
		messages: {
			"04/06/2021": [
				{
					content: getRandomSentence(),
					sender: 3,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 3,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "sent",
				},
			],

			YESTERDAY: [
				{
					content: getRandomSentence(),
					sender: 3,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 3,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			TODAY: [
				{
					content: getRandomSentence(),
					sender: 3,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 3,
					time: "09:11:26",
					status: null,
				},
				{
					image: true,
					sender: 3,
					time: "09:12:26",
					status: null,
				},
				{
					image: true,
					sender: null,
					time: "09:13:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "sent",
				},
			],
		},
		group: false,
		pinned: false,
		typing: false,
	},
	{
		id: 4,
		profile_picture: ppBoy2,
		name: "David Schwimmer",
		phone_number: "+2348123456789",
		whatsapp_name: "David",
		unread: 1,
		messages: {
			"04/06/2021": [
				{
					content: getRandomSentence(),
					sender: 4,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 4,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			YESTERDAY: [
				{
					content: getRandomSentence(),
					sender: 4,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 4,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			TODAY: [
				{
					content: getRandomSentence(),
					sender: 4,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 4,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 4,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: 4,
					time: "09:11:26",
					status: null,
				},
			],
		},
		group: false,
		pinned: false,
		typing: false,
	},

	{
		id: 5,
		profile_picture: ppBoy1,
		name: "Daniel Oladeji",
		phone_number: "+2348123456789",
		whatsapp_name: "Beyonce",
		unread: 0,
		messages: {
			"04/06/2021": [
				{
					content: getRandomSentence(),
					sender: 5,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 5,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			YESTERDAY: [
				{
					content: getRandomSentence(),
					sender: 5,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 5,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			TODAY: [
				{
					content: getRandomSentence(),
					sender: 5,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 5,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],
		},
		group: false,
		pinned: false,
		typing: false,
	},
	{
		id: 6,
		profile_picture: ppBoy3,
		name: "Chris Breno",
		phone_number: "+2348123456789",
		whatsapp_name: "Chris",
		unread: 3,
		messages: {
			"04/06/2021": [
				{
					content: getRandomSentence(),
					sender: 6,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 6,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			YESTERDAY: [
				{
					content: getRandomSentence(),
					sender: 6,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 6,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			TODAY: [
				{
					content: getRandomSentence(),
					sender: 6,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 6,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 6,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: 6,
					time: "09:11:26",
					status: null,
				},
			],
		},
		group: false,
		pinned: false,
		typing: false,
	},

	{
		id: 7,
		profile_picture: ppGirl3,
		name: "Karen Okonkwo",
		phone_number: "+2348123456789",
		whatsapp_name: "Karen",
		unread: 0,
		messages: {
			"04/06/2021": [
				{
					content: getRandomSentence(),
					sender: 8,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 7,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			YESTERDAY: [
				{
					content: getRandomSentence(),
					sender: 7,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 7,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			TODAY: [
				{
					content: getRandomSentence(),
					sender: 7,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 7,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],
		},
		group: false,
		pinned: false,
		typing: false,
	},

	{
		id: 8,
		profile_picture: ppGirl4,
		name: "Beyoncé Knowles",
		phone_number: "+2348123456789",
		whatsapp_name: "Beyonce",
		unread: 0,
		messages: {
			"04/06/2021": [
				{
					content: getRandomSentence(),
					sender: 8,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 8,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			YESTERDAY: [
				{
					content: getRandomSentence(),
					sender: 8,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 8,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			TODAY: [
				{
					content: getRandomSentence(),
					sender: 8,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 8,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],
		},
		group: false,
		pinned: false,
		typing: false,
	},
];

export default users;
