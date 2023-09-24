import React from "react";
import People from "@/components/shared/People";

import {IPeople} from "@/utils/globalConstants";

const PeopleList = (): React.JSX.Element => {

	const peopleData: IPeople[] = [
		{
			name : "Aarav Rathore",
			profileURL: "",
			lastMessage: {
				text: "hello dummy text of long",
				timestamp: new Date(),
				status: "seen"
			},
			unreadMessage: 1
		},
		{
			name : "Ishan Rangarajan",
			profileURL: "",
			lastMessage: {
				text: "hello dummy text of long",
				timestamp: new Date(),
				status: "seen"
			},
			unreadMessage: 1
		},
		{
			name : "Dhruv Saxena",
			profileURL: "",
			lastMessage: {
				text: "hello dummy text of long",
				timestamp: new Date(),
				status: "seen"
			},
			unreadMessage: 1
		},
		{
			name : "Vihaan Venkatesan",
			profileURL: "",
			lastMessage: {
				text: "hello dummy text of long",
				timestamp: new Date(),
				status: "seen"
			},
			unreadMessage: 1
		},
		{
			name : "Vishal Mehta",
			profileURL: "",
			lastMessage: {
				text: "hello dummy text of long",
				timestamp: new Date(),
				status: "seen"
			},
			unreadMessage: 1
		},
		{
			name : "Shreyas Jaiteley",
			profileURL: "",
			lastMessage: {
				text: "hello dummy text of long",
				timestamp: new Date(),
				status: "seen"
			},
			unreadMessage: 1
		},
		{
			name : "Rakesh Gavde",
			profileURL: "",
			lastMessage: {
				text: "hello dummy text of long",
				timestamp: new Date(),
				status: "seen"
			},
			unreadMessage: 1
		},
		{
			name : "Trishla Rodrigues",
			profileURL: "",
			lastMessage: {
				text: "hello dummy text of long",
				timestamp: new Date(),
				status: "seen"
			},
			unreadMessage: 1
		},
		{
			name : "Aanya Das",
			profileURL: "",
			lastMessage: {
				text: "hello dummy text of long",
				timestamp: new Date(),
				status: "seen"
			},
			unreadMessage: 1
		},
		{
			name : "Saanvi Gupta",
			profileURL: "",
			lastMessage: {
				text: "hello dummy text of long",
				timestamp: new Date(),
				status: "seen"
			},
			unreadMessage: 1
		},
		{
			name : "Rishika Chopra",
			profileURL: "",
			lastMessage: {
				text: "hello dummy text of long",
				timestamp: new Date(),
				status: "seen"
			},
			unreadMessage: 1
		},
		{
			name : "Navya Jayaraman",
			profileURL: "",
			lastMessage: {
				text: "hello dummy text of long",
				timestamp: new Date(),
				status: "seen"
			},
			unreadMessage: 1
		},
		{
			name : "Pari Kapoor",
			profileURL: "",
			lastMessage: {
				text: "hello dummy text of long",
				timestamp: new Date(),
				status: "seen"
			},
			unreadMessage: 1
		},
		{
			name : "Saanvi Lobo",
			profileURL: "",
			lastMessage: {
				text: "hello dummy text of long",
				timestamp: new Date(),
				status: "seen"
			},
			unreadMessage: 1
		},
		{
			name : "Vihaan Chatterjee",
			profileURL: "",
			lastMessage: {
				text: "hello dummy text of long",
				timestamp: new Date(),
				status: "seen"
			},
			unreadMessage: 1
		}
	]

	return <div className={` h-[calc(100%_-_110px)] overflow-y-scroll`}>
		{peopleData.length > 0 && peopleData.map((people, idx) => {
			return <People key={idx} data={people} />
		})}
	</div>
}

export default PeopleList