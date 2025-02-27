function checkProbabilityTheory(count) {
    let evenCount = 0; 
  
    for (let i = 0; i < count; i++) {
      const randomNumber = +((Math.random() * (1000 - 100 + 1)) + 100).toFixed(0);

      if (randomNumber % 2 === 0) {
        evenCount++;
      }
    }
  
    
    const oddCount = count - evenCount;
    const evenPerc = (evenCount / count) * 100;
    const oddPerc = (oddCount / count) * 100;
  
    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Непарних чисел: ${oddCount}`);
    console.log(`Відсоток парних: ${evenPerc.toFixed(0)}%`);
    console.log(`Відсоток непарних: ${oddPerc.toFixed(0)}%`); 
  }
  

  checkProbabilityTheory(10000);