import Cards from "../Cards";
import MainText from "../MainText";
import SearchBar from "../SearchBar";
import MainHeader from "../MainHeader";
import MainFooter from "../MainFooter";

export default function Main() {
  return (
    <div className="flex-1 p-2">
      <MainHeader />

      <div className="max-w-[900px] m-auto">
        <MainText />
        <Cards />
        <SearchBar />
        <MainFooter />
      </div>
    </div>
  );
}
