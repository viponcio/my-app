import React, { useEffect, useState } from "react";
import {
	faStar,
	faEllipsisVertical,
	faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../TableData/data";
const { name, nextReservation, status } = data();

export default function Row() {
	return (
		<table className="w-6/12 border ">
			<tbody>
				<tr>
					<td className="flex gap-1 justify-left px-2 py-2">
						<img src="../miniCooper.jpeg" className="h-10" />
						{name}
					</td>
					<td className=" px-8 py-4">{nextReservation}</td>
					<td className="px-8 py-4">
						<span className="bg-green-100 rounded-md text-green-800 p-2">
							{status}
						</span>
					</td>
					<td className="flex row px-8 py-4  sm:shrink-0">
						{Array.from({ length: 5 }).map((_, index) => {
							return <FontAwesomeIcon key={index} icon={faStar} className="h-4" />;
						})}
					</td>
					<td className=" px-8 py-4">
						<FontAwesomeIcon icon={faEllipsisVertical} className="h-6" />
					</td>
				</tr>
				<tr>
					<td className="flex gap-1 justify-left px-2 py-2">
						<img src="../miniCooper.jpeg" className="h-10" />
						{name}
					</td>
					<td className=" px-8 py-4">{nextReservation}</td>
					<td className=" px-8 py-4">
						<span className="bg-green-100 rounded-md text-green-800 p-2  ">
							{status}
						</span>
					</td>
					<td className=" flex row  px-8 py-4">
						{Array.from({ length: 5 }).map((_, index) => {
							return <FontAwesomeIcon icon={faStar} className="h-4" />;
						})}
					</td>
					<td className=" px-8 py-4">
						<FontAwesomeIcon icon={faEllipsisVertical} className="h-6" />
					</td>
				</tr>
				<tr>
					<td className="flex gap-1 justify-left px-2 py-2">
						<img src="../miniCooper.jpeg" className="h-10" />
						{name}
					</td>
					<td className="px-8 py-4">{nextReservation}</td>
					<td className="px-8 py-4">
						<span className="bg-green-100 rounded-md text-green-800 p-2 ">
							{status}
						</span>
					</td>
					<td className="flex row  px-8 py-4">
						{Array.from({ length: 5 }).map((_, index) => {
							return <FontAwesomeIcon icon={faStar} className="h-4" />;
						})}
					</td>
					<td className=" px-8 py-4">
						<FontAwesomeIcon icon={faEllipsisVertical} className="h-6" />
					</td>
				</tr>
			</tbody>
		</table>
	);
}
