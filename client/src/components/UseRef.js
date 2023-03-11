import { useRef } from "react";

//code taken from beta.reactjs.org
const UseRef = () => {
    const listRef = useRef(null);

    function scrollToIndex(index) {
      const listNode = listRef.current;
      // This line assumes a particular DOM structure:
      const imgNode = listNode.querySelectorAll('li > img')[index];
      imgNode.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  
    return (
      <>
        <nav>
          <button onClick={() => scrollToIndex(0)}>
            Tom
          </button>
          <button onClick={() => scrollToIndex(1)}>
            Maru
          </button>
          <button onClick={() => scrollToIndex(2)}>
            Jellylorum
          </button>
        </nav>
        <div>
          <ul ref={listRef}>
            <li>
              <img
                src="https://placekitten.com/g/600/600"
                alt="Tom"
              />
            </li>
            <li>
              <img
                src="https://placekitten.com/g/600/600"
                alt="Maru"
              />
            </li>
            <li>
              <img
                src="https://placekitten.com/g/650/600"
                alt="Jellylorum"
              />
            </li>
          </ul>
        </div>
      </>
    );
}
export default UseRef