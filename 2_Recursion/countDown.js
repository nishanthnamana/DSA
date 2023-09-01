function countDown(numb) {
  if (numb <= 0) {
    console.log("Its done");
    return;
  }

  console.log(numb);
  numb--;
  countDown(numb);
}

countDown(10);
