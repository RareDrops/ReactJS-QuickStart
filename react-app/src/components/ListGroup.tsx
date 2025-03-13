import { useState } from "react";


// Design the shape of the input into this component, we create an interface with these parameters:
// { items: [], heading: string }
// By Convention it is {name of componentt as prefix}Props
interface ListGroupProps {
	items: string[];
	heading: string;
	// (item: string) => void -- We want a function that takes item(string) and returns void
	onSelectItem: (item:string)  => void
}

function ListGroup({ items, heading, onSelectItem}: ListGroupProps) {
	// useState is known as Hook
	const [selectedIndex, setSelectedIndex] = useState(-1);
	// useState(-1) where -1 is the default value | returns an array below
	// arr[0] // variable (selectedIndex)
	// arr[1] // updater function

	// Event handler
	const handleClick = (event: MouseEvent) => console.log(event);

	
	return (
	// Empty angle brackets tells react to use Fragment to wrap these children
	// This is necessary you cannot return more than 1 element in react
	<>
		<h1>{heading}</h1>
		
		{ items.length == 0 && <p>No item found</p> /* Hacky way to return "No item found" if item-length == true*/}
		<ul className="list-group">
			{/* Take each item and convert it to an li element */}
			{items.map((item, index) => (
				<li 
				className={ selectedIndex == index ? 'list-group-item active' : 'list-group-item'} 
				key={item} 
				onClick={() => {
					setSelectedIndex(index);
					onSelectItem(item);
					}}>
				{item}
				</li>
			))}
		</ul>
	</>
	);
}


export default ListGroup;