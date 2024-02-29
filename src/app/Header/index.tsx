import React from "react";
import Row from "../Row";

export default function Header() {
	return (
		<table className="w-6/12 shadow-lg bg-white border-collapse hidden md:table">
			<thead className="bg-gray-200">
				<tr className="flex gap-20">
					<th className=" text-left px-8 py-4 ">Car</th>
					<th className=" text-left px-8 py-4 ">Next Reservation</th>
					<th className=" text-left px-8 py-4 ">Status</th>
					<th className=" text-left px-8 py-4 ">Rating</th>
					<th className=" text-left px-8 py-4 ">Action</th>
				</tr>
			</thead>
		</table>
	);
}
