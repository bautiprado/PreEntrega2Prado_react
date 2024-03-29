import Item from '../ItemList/Item';
import './itemList.css';
import { Link } from 'react-router-dom';

function ItemList({ items }) {
    return (
    <div className="listItems">
        {items.map((item) => {
            return (
            <Link to={`/item/${item.id}`}>
                <Item {...item} />;
            </Link>
            );
        })}
    </div>
    );
}

export default ItemList;