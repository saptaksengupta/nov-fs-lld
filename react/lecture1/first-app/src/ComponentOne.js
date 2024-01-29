//component
export function ComponentOne(props) {
    const {name, age} = props;
    return (
      <div>
        <h1>Hello I am {name} and my age is {age}</h1>
      </div>
    );
  }