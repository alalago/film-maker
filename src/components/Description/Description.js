import './DescriptionStyle.css';

function Description({text}) {
    
  return (
    <div className="description">
        {text.split('\n').map( (text, key) => {
            return <p key={key}> {text}</p>;
        })}
    </div>
  );
}

export default Description;