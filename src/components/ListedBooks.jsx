import { Helmet } from "react-helmet";

const ListedBooks = () => {
    return (
<div>
  <Helmet><title>Listed Books || Book Vibe</title></Helmet>
<h1 className="text-center font-bold text-2xl m-3">Books</h1>
            <div role="tablist" className="tabs tabs-lifted">
  <input type="radio" name="my_tabs_2" role="tab" className="tab font-bold  [--tab-bg:gray] [--tab-border-color:green]" aria-label="Read Books" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
    Tab content 1
  </div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab font-bold" aria-label="Wishlist Books" defaultChecked />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
    Tab content 2
  </div>
</div>

</div>
 
    );
};

export default ListedBooks;