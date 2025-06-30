export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="footer">
        <em>start adding some items to your packing list 💥</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;

  const percetage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percetage === 100
          ? "you got everything ready to go"
          : `👜You have ${numItems} item on your list, and you already packed 
        ${numPacked} ${percetage}%`}
      </em>
    </footer>
  );
}
