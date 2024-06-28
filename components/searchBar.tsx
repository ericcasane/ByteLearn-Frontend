import { Input } from "@nextui-org/react";
import { SearchIcon } from "./icons";

export const SearchBar = () => {
    return (
        <div className="max-w-md p-3">
            <Input
                aria-label="Search"
                classNames={{
                    inputWrapper: "bg-default-100",
                    input: "text-sm",
                }}
                variant="faded"
                labelPlacement="outside"
                placeholder="Search..."
                
                startContent={
                    <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
                }
                type="search"
            />
        </div>
    );
};