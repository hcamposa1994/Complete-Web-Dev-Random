// object spread operator
const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2,
  bird: 40,
};

const objectSpread = (p1, p2, p3) => {
  console.log(p1);
  console.log(p2);
  console.log(p3);
};

const { tiger, lion, ...rest } = animals;

objectSpread(tiger, lion, rest);

// For Await Of
const getData2 = async () => {
  const arrayOfPromises = urls.map((url) => fetch(url));
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
};

//finally
// ..then((result) => {
// }).catch((err) => {
// }).finally() - always runs regardless of then or catch
