const text = `
the grown-ups' response, this time, was to advise me to lay aside my drawings of boa constrictors, 
whether from the inside or the outside, and devote myself instead to geography, history, arithmetic, 
and grammar. That is why, at the, age of six, I gave up what might have been a magnificent career 
as a painter. I had been disheartened by the failure of my Drawing Number One and my Drawing Number Two. 
Grown-ups never understand anything by themselves, and it is tiresome for children to be always and 
forever explaining things to the.`;

let splitText = text.split(' ')

let countThe = 0;
for (txt of splitText) {
    txt = txt.replace('\n','');
    txt = txt.replace('.','');
    txt = txt.replace(',', '');
    if (txt == 'the') {
        countThe += 1;
    }
}

console.log(countThe);