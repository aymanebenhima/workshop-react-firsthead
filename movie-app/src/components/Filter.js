import { Input, Rate } from 'antd';

const Filter = ({ titleFilter, setTitleFilter, ratingFilter, setRatingFilter }) => {
  return (
    <div style={{ margin: '20px', textAlign: 'center' }}>
      <Input
        placeholder="Search by title"
        style={{ width: 300, margin: '10px' }}
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <Rate
        style={{ margin: '10px' }}
        value={ratingFilter}
        onChange={(value) => setRatingFilter(value)}
      />
    </div>
  );
};

export default Filter;