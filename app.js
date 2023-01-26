// 1. Objectin daxilina yeni key value alava etmak ve silmak üçün 2 farqli funksiya yazin 
// first way to add
const obj = { a: 1 };
obj.b = 2;
obj.c = 3;
// obj = { a: 1, b: 2, c: 3 }
// second way 
const obj = { a: 1 };
const bKey = 'b';
obj[bKey] = 2;
obj['c'] = 3;
// obj = { a: 1, b: 2, c: 3 }
// third way to add
const obj = { a: 1 };
Object.assign(obj, { b: 2 }, { c: 3 });
// obj = { a: 1, b: 2, c: 3 }

// Ways to delete 
var inform = {
    name: 'Memmed Memmedov',
    currentRole: 'Detective',
    wife: 'Nazli Memmedova',
    mentor: 'Joe Rogan'
  }
  
  delete inform.mentor;
  
  console.log(inform)

//   2. Objectin daxilina yeni key value alava etmak ve silmak üçün 1 funksiya yazin

  const list = [
    {
      name: 'Michael Scott',
      company: 'Dunder Mufflin',
      designation: 'Regional Manager',
      show: 'The Office'
    },
    {
      name: 'Barney Stinson',
      company: 'Golaith National Bank',
      designation: 'Please',
      show: 'How I met your mother'
    },
    {
      name: 'Jake Peralta',
      company: 'NYPD',
      designation: 'Detective',
      show: 'Brooklyn 99'
    },
  ]
  
  list.forEach(function (element) {
    delete element.designation;
    Object.assign(element, { b: 2 }, { c: 3 });
  });
  
  console.table(list)


//    3. Array daxilinda objectlar var. Bu obyeklari count dayarina gore artan sera ila duzLin. 

<html>
<body>

<h2>JavaScript Array Sort</h2>
<p>Sort car objects on age:</p>

<p id="demo"></p>

<script>
const obj = [
  {name:"Memmed", count:3},
  {name:"Eli", count:2},
  {name:"Veli", count:1}
];

displayCount();

obj.sort(function(a, b){return a.count - b.count});
displayCount();

function displayCount() {
  document.getElementById("demo").innerHTML =
  obj[0].name + " " + obj[0].count + "<br>" +
  obj[1].name + " " + obj[1].count + "<br>" +
  obj[2].name + " " + obj[2].count;
}
</script>

</body>
</html>

// 4. Yalniz object metodlarindan istifada edarak kohna objectdan yenisi yaradin
var p1 = {firstName: "first", lastName:"last"};
var p2 = Object.assign({}, p1);
var p3 = {...p1}

// 5. Bir obyekti tam olaraq deep clone edin 

var p1 = {firstName: "first", lastName:"last"};
var p2 = JSON.parse(JSON.stringify(p1));

// 6. Her defe yeni obyekt yaradan funksiya yazin. (Functional constructor) 

function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
  }
  
  const salva = new Person("Salva");
  salva.name;
  salva.introduceSelf();
  
  const frankie = new Person("Frankie");
  frankie.name;
  frankie.introduceSelf();
  


