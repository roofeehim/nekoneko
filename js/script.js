function random() {

  var results = ["ねこ労働350円", "ねこ労働1500円", "ねこ労働100円", "ねこ労働100万円", "非番", "ねこ労働0円", "ねこ労働1万円", "ねこ労働解除"];

  var result = Math.floor(Math.random() * results.length);

  alert(results[result]);

}