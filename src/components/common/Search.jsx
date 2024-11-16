import { Input } from "@/components/ui/input"

const Search = () => {
    return (
        <div>
           <div className="grid w-full max-w-sm items-center gap-1.5">
      <label htmlFor="email">Email</label>
      <Input type="text" id="email" placeholder="search" />
    </div> 
        </div>
    );
};

export default Search;