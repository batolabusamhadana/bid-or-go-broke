const pptxgen=require('pptxgenjs');
const pres=new pptxgen();pres.layout='LAYOUT_WIDE';
pres.title='Bid or Go Broke - AWS SBG BZU Booth Kit';pres.author='AWS Student Builder Group BZU';
pres.theme={headFontFace:'Montserrat',bodyFontFace:'Montserrat'};
const BG='0B0620',CARD='160B3A',PUR='8B2BFF',VIO='B98CFF',CY='3DE8FF',WH='F5F0FF',MUT='B9A8E8',OR='FF9900';
pres.defineSlideMaster({title:'DARK',background:{color:BG},objects:[
{rect:{x:0,y:0,w:13.33,h:0.12,fill:{color:PUR}}},{rect:{x:0,y:0.12,w:3,h:0.04,fill:{color:CY}}},
{text:{text:'AWS STUDENT BUILDER GROUP · BIRZEIT UNIVERSITY',options:{x:0.4,y:7.08,w:6.5,h:0.3,fontSize:9,color:MUT,charSpacing:2,margin:0}}},
{text:{text:'DEVFEST BZU · BID OR GO BROKE',options:{x:7.2,y:7.08,w:5.2,h:0.3,fontSize:9,color:MUT,align:'right',charSpacing:2,margin:0}}}],
slideNumber:{x:12.6,y:7.08,w:0.4,h:0.3,fontSize:9,color:CY}});
const T=(s,t,o)=>s.addText(t,Object.assign({isTextBox:true,margin:0,color:WH,fontFace:'Montserrat',valign:'top'},o));
const mk=(k,t)=>{const s=pres.addSlide({masterName:'DARK'});T(s,k,{x:0.4,y:0.32,w:9,h:0.25,fontSize:10,color:CY,bold:true,charSpacing:4});T(s,t,{x:0.4,y:0.58,w:12.5,h:0.5,fontSize:26,bold:true});return s;};
const box=(s,x,y,w,h,c)=>s.addShape(pres.ShapeType.roundRect,{x,y,w,h,fill:{color:CARD},line:{color:c||PUR,width:1.5},rectRadius:0.12});
const pos=i=>({x:i%2?6.93:0.4,y:i<2?1.2:4.1});const W=6.0,H=2.8;
const sc=(s,k,ox,oy)=>{const f=o=>{o=Object.assign({},o);if(o.x!==undefined)o.x=ox+o.x*k;if(o.y!==undefined)o.y=oy+o.y*k;['w','h','fontSize','charSpacing','paraSpaceAfter','rectRadius'].forEach(a=>{if(o[a]!==undefined)o[a]*=k});if(o.line)o.line=Object.assign({},o.line,{width:o.line.width*k});return o;};
return{addShape:(t,o)=>s.addShape(t,f(o)),addText:(t,o)=>{if(Array.isArray(t))t=t.map(r=>{const ro=Object.assign({},r.options);['fontSize','charSpacing'].forEach(a=>{if(ro[a])ro[a]*=k});return{text:r.text,options:ro}});return s.addText(t,f(o));}};};


// ---------- cover
let s=pres.addSlide({masterName:'DARK'});
s.addShape(pres.ShapeType.ellipse,{x:8.6,y:0.9,w:5.5,h:5.5,fill:{color:PUR,transparency:75},line:{color:CY,width:1}});
s.addShape(pres.ShapeType.ellipse,{x:9.6,y:1.9,w:3.5,h:3.5,fill:{color:PUR,transparency:50},line:{color:VIO,width:1}});
T(s,'DEVFEST BZU · BOOTH 8',{x:0.8,y:1.3,w:7,h:0.3,fontSize:13,color:CY,bold:true,charSpacing:5});
T(s,'BID OR\nGO BROKE',{x:0.8,y:1.8,w:8,h:2.4,fontSize:66,bold:true});
T(s,'Build a cloud app with 100 Cloud Credits. Outsmart the other teams. Win the auction.',{x:0.8,y:4.4,w:6.8,h:0.9,fontSize:16,color:VIO});
T(s,'AWS  ×  AWS STUDENT BUILDER GROUP BZU  ×  DEVFEST BZU',{x:0.8,y:5.8,w:8,h:0.3,fontSize:11,color:OR,bold:true,charSpacing:2});
T(s,'Complete printable booth kit · All prices & credits are fictional game values',{x:0.8,y:6.2,w:8,h:0.3,fontSize:10,color:MUT});

// ---------- host guide
s=mk('HOST GUIDE','Setup & the 30-Second Pitch');
box(s,0.4,1.3,6.0,5.5);box(s,6.93,1.3,6.0,5.5);
T(s,[{text:'BOOTH SETUP\n',options:{color:CY,bold:true,fontSize:13}},
{text:'Print this kit on A4 (landscape), cut cards on the outline.\nPrint 1 Cloud Credits sheet per team (100 CC each).\nPut the 8 AWS Service Cards in a row: the Auction Board.\nShuffle the Scenario Cards face-down.\nHave a timer (10 seconds per card), a pen, the Scoreboard and the Purchase Log ready.\nPrizes on display. Teams of 1 to 3 players. 2 to 4 teams per game.',options:{fontSize:12,color:WH}}],{x:0.7,y:1.55,w:5.4,h:5,paraSpaceAfter:6});
T(s,[{text:'SAY THIS IN 30 SECONDS\n',options:{color:CY,bold:true,fontSize:13}},
{text:'"You have 100 Cloud Credits. I reveal an app you must build. I auction AWS services one by one. Highest bid wins the card, and the runner-up can grab the 2nd copy. Max 4 cards each. You score for a working build, smart picks and leftover credits. Overbuying costs you points. Best score wins!"',options:{fontSize:13,color:WH,italic:true}},
{text:'\n\nGAME TIMELINE (about 4 min)\n',options:{color:CY,bold:true,fontSize:13}},
{text:'0:00 Reveal scenario   0:20 Auction (8 cards x 10 sec)   1:40 Teams review picks   2:30 Pitch (1 sentence each)   3:00 Score & announce',options:{fontSize:12,color:WH}}],{x:7.23,y:1.55,w:5.4,h:5,paraSpaceAfter:6});

// ---------- rules & scoring
s=mk('RULES & SCORING','Fair, Fast, Not a Quiz');
box(s,0.4,1.3,6.0,5.5);box(s,6.93,1.3,6.0,5.5,CY);
T(s,[{text:'AUCTION RULES\n',options:{color:CY,bold:true,fontSize:13}},
{text:'1. Every team starts with 100 Cloud Credits (CC).\n2. Host reads a card and its starting price. Teams call raises of +2 CC or more.\n3. 10-second timer resets on every bid. "Going once, twice, sold!"\n4. Each service has 2 copies. Top bidder wins one at their bid. Runner-up may buy the 2nd copy at their own last bid.\n5. No bids? First team to claim it pays the starting price.\n6. Max 4 cards per team. Bids must be paid in credits you hold.\n7. Log every sale on the Purchase Log.',options:{fontSize:12}}],{x:0.7,y:1.55,w:5.4,h:5,paraSpaceAfter:5});
T(s,[{text:'SCORING (max 50)\n',options:{color:CY,bold:true,fontSize:13}},
{text:'Working build: +10 per Must-Have covered (max 30)\nSmart pick: +5 per Bonus synergy (max 10)\nOverkill: -5 per unnecessary service (max -10)\nBudget: +1 per 5 unspent CC (max 6)\nPitch: 0 to 4 from the host for a 1-sentence "why"\n',options:{fontSize:13}},
{text:'\nA build missing any Must-Have is INCOMPLETE and cannot win.\nTie-break: more credits left, then best pitch.\nMost expensive does not mean best: cheap valid builds can beat big spenders.',options:{fontSize:12,color:VIO}}],{x:7.23,y:1.55,w:5.4,h:5,paraSpaceAfter:5});

// ---------- service cards
const SV=[
['EC2','Amazon EC2','COMPUTE','A virtual computer in the cloud. You control everything it runs.','Hosting websites, apps and backends that run all day.',20],
['S3','Amazon S3','OBJECT STORAGE','A giant online locker for files: photos, videos, documents.','Storing user uploads, backups and static websites.',10],
['λ','AWS Lambda','SERVERLESS COMPUTE','Runs your code only when needed. Pay for the moments it works.','Handling sudden traffic spikes and short tasks.',15],
['RDS','Amazon RDS','RELATIONAL DATABASE','A managed database with tidy tables that link to each other.','Student records, orders, bookings and accounts.',25],
['DDB','Amazon DynamoDB','NoSQL DATABASE','A super-fast database for simple, huge, rapidly changing data.','Game scores, live tracking and shopping carts.',20],
['CDN','Amazon CloudFront','CONTENT DELIVERY','Keeps copies of your content near users so it loads quickly.','Fast images and videos for users around the world.',15],
['R53','Amazon Route 53','DNS','The phone book of the internet: turns a name into a server address.','Giving your app a friendly web address.',10],
['IDP','Amazon Cognito','LOGIN & IDENTITY','Handles sign-up and sign-in so you do not build it yourself.','"Log in with email or Google" for any app.',10]];
const svc=(s,d,x,y)=>{box(s,x,y,W,H);
s.addShape(pres.ShapeType.ellipse,{x:x+0.25,y:y+0.25,w:0.95,h:0.95,fill:{color:PUR},line:{color:CY,width:1.5}});
T(s,d[0],{x:x+0.25,y:y+0.25,w:0.95,h:0.95,fontSize:d[0].length>2?15:22,bold:true,align:'center',valign:'middle'});
T(s,d[1],{x:x+1.4,y:y+0.25,w:3.2,h:0.45,fontSize:18,bold:true});
T(s,d[2],{x:x+1.4,y:y+0.75,w:3.2,h:0.3,fontSize:10,color:CY,bold:true,charSpacing:2});
s.addShape(pres.ShapeType.roundRect,{x:x+4.65,y:y+0.25,w:1.1,h:0.95,fill:{color:PUR},rectRadius:0.1});
T(s,String(d[5]),{x:x+4.65,y:y+0.3,w:1.1,h:0.55,fontSize:26,bold:true,align:'center'});
T(s,'CC START',{x:x+4.65,y:y+0.85,w:1.1,h:0.25,fontSize:8,align:'center',bold:true});
T(s,d[3],{x:x+0.25,y:y+1.4,w:5.5,h:0.6,fontSize:12});
T(s,'Used for: '+d[4],{x:x+0.25,y:y+2.02,w:5.5,h:0.45,fontSize:10.5,color:VIO,italic:true});
T(s,'Stock: 2 copies · Fictional price',{x:x+0.25,y:y+2.5,w:3,h:0.2,fontSize:8,color:MUT});
T(s,'AWS SBG BZU',{x:x+4.3,y:y+2.5,w:1.45,h:0.2,fontSize:8,color:OR,bold:true,align:'right'});};
SV.forEach((d,i)=>{s=mk('PRINTABLE · AWS SERVICE CARD '+(i+1)+' OF 8','Auction Card: '+d[1]);svc(sc(s,2,0.67,1.2),d,0,0);});

// ---------- scenario cards
const SC=[
['01','ShopEasy','Online Shopping Platform','Students shop campus merch online. Orders and product photos must never get lost.',['Something to RUN the website','A DATABASE for products and orders','Storage for product PHOTOS'],'Friday flash sale = traffic spikes!'],
['02','SnapShare','Photo-Sharing App','Students post and like photos. Users far away complain pictures load slowly.',['Something to RUN the app','Storage for PHOTOS','A DATABASE for likes and captions'],'Speed matters. So does your wallet.'],
['03','CampusReg','Student Registration System','Everyone registers for courses at 9:00 sharp. Students link to courses.',['Something to RUN the system','A database built for LINKED records','A secure LOGIN for students'],'Records that connect to each other.'],
['04','FlashTix','Concert Ticket Flash Sale','10,000 fans hit "Buy" in 10 seconds. The page must stay fast.',['Something to RUN the sale','A very FAST database','Quick page DELIVERY worldwide'],'Spikes, then silence. Pay smart.'],
['05','StudyBuddy','Notes-Sharing Platform','Students upload and share lecture notes inside their own class groups.',['Something to RUN the platform','Storage for NOTES (files)','A secure LOGIN'],'Only classmates may get in.'],
['06','CampusRide','Live Ride-Share Tracker','Shuttle locations update every second. Only students may use it.',['Something to RUN the tracker','A FAST database for updates','A secure LOGIN'],'Tiny updates, thousands of times.'],
['07','TinyBlog','Student Blog','A simple blog with articles and pictures. No logins and no fancy data.',['Storage that HOSTS the pages','Fast page DELIVERY','A friendly web ADDRESS'],'Simple can win. Do not overbuy.'],
['08','GameLeague','Campus Game Leaderboard','Players log in, play and see rankings update live all night.',['Something to RUN the game','A FAST database for scores','A secure LOGIN'],'Scores change constantly.']];
const scn=(s,d,x,y)=>{box(s,x,y,W,H,CY);
T(s,'SCENARIO '+d[0],{x:x+0.25,y:y+0.2,w:3,h:0.25,fontSize:9,color:CY,bold:true,charSpacing:3});
T(s,d[1]+'  ·  '+d[2],{x:x+0.25,y:y+0.45,w:5.5,h:0.4,fontSize:16,bold:true});
T(s,d[3],{x:x+0.25,y:y+0.95,w:5.5,h:0.5,fontSize:11,color:VIO});
T(s,[{text:'YOUR APP MUST HAVE\n',options:{color:CY,bold:true,fontSize:10,charSpacing:2}},...d[4].map((n,i)=>({text:n,options:{bullet:true,fontSize:11.5,breakLine:i<2}}))],{x:x+0.25,y:y+1.5,w:5.5,h:1.0,paraSpaceAfter:2});
T(s,'Hint: '+d[5]+'  ·  Budget: 100 CC · Max 4 cards',{x:x+0.25,y:y+2.5,w:5.5,h:0.22,fontSize:9,color:OR,bold:true});};
SC.forEach((d,i)=>{s=mk('PRINTABLE · SCENARIO CARD '+(i+1)+' OF 8','Startup Scenario: '+d[1]);scn(sc(s,2,0.67,1.2),d,0,0);});

// ---------- credits
s=mk('PRINTABLE · CLOUD CREDITS','Cloud Credits: 100 CC per Team');
[20,20,20,10,10,10,5,5].forEach((v,i)=>{const x=i%2?6.93:0.4,y=1.3+Math.floor(i/2)*1.42;box(s,x,y,6.0,1.25);
s.addShape(pres.ShapeType.ellipse,{x:x+0.25,y:y+0.17,w:0.9,h:0.9,fill:{color:PUR},line:{color:CY,width:1.5}});
T(s,String(v),{x:x+0.25,y:y+0.17,w:0.9,h:0.9,fontSize:24,bold:true,align:'center',valign:'middle'});
T(s,'CLOUD CREDITS',{x:x+1.4,y:y+0.3,w:3,h:0.35,fontSize:16,bold:true});
T(s,'Fictional game currency · AWS SBG BZU',{x:x+1.4,y:y+0.7,w:4.4,h:0.3,fontSize:10,color:MUT});
T(s,String(v)+' CC',{x:x+4.4,y:y+0.35,w:1.4,h:0.5,fontSize:22,bold:true,color:CY,align:'right'});});

// ---------- price list
s=mk('PRINTABLE · AUCTION BOARD','Price List: Starting Bids');
const hd=t=>({text:t,options:{bold:true,color:WH,fill:{color:PUR},align:'center'}});
const cell=(t,o)=>({text:String(t),options:Object.assign({color:WH,fill:{color:CARD},align:'center'},o||{})});
let rows=[[hd('SERVICE'),hd('WHAT IT DOES'),hd('START (CC)'),hd('MIN RAISE'),hd('STOCK')]];
SV.forEach(d=>rows.push([cell(d[1],{bold:true,align:'left'}),cell(d[3].split('.')[0],{align:'left',fontSize:10}),cell(d[5],{bold:true,color:CY,fontSize:14}),cell('+2'),cell('2')]));
s.addTable(rows,{x:0.4,y:1.3,w:12.5,colW:[2.9,6.0,1.4,1.2,1.0],rowH:0.55,fontSize:12,fontFace:'Montserrat',border:{type:'solid',color:PUR,pt:1},valign:'middle'});
T(s,'All prices are fictional game values, not real AWS pricing.  Max 4 cards per team.',{x:0.4,y:6.7,w:12,h:0.25,fontSize:10,color:MUT});

// ---------- scoreboard
s=mk('PRINTABLE · SCOREBOARD','Scoreboard');
rows=[['TEAM','SCENARIO','MUST-HAVES (30)','BONUS (+5)','OVERKILL (-5)','BUDGET (6)','PITCH (4)','TOTAL /50','RANK'].map(hd)];
for(let i=0;i<10;i++)rows.push(Array.from({length:9},()=>cell('',{})));
s.addTable(rows,{x:0.4,y:1.3,w:12.5,colW:[2.2,1.4,1.6,1.2,1.3,1.1,1.1,1.4,1.2],rowH:0.46,fontSize:10,fontFace:'Montserrat',border:{type:'solid',color:PUR,pt:1},valign:'middle'});

// ---------- purchase log
s=mk('PRINTABLE · PURCHASE LOG','Purchase Log');
rows=[['ROUND','SERVICE','WINNER','PRICE PAID','2ND COPY TEAM','2ND PRICE','NOTES'].map(hd)];
SV.forEach((d,i)=>rows.push([cell(i+1),cell(d[1],{align:'left',bold:true}),cell(''),cell(''),cell(''),cell(''),cell('')]));
s.addTable(rows,{x:0.4,y:1.3,w:12.5,colW:[0.9,2.8,2.0,1.5,2.0,1.4,1.9],rowH:0.55,fontSize:11,fontFace:'Montserrat',border:{type:'solid',color:PUR,pt:1},valign:'middle'});

// ---------- answer key
const KEY=[
['01 ShopEasy','Compute: EC2 or Lambda · DB: RDS or DynamoDB · S3','CloudFront (fast photos), Cognito (customer login)','Both EC2 + Lambda, or both databases','Lambda + DynamoDB + S3 = 45 CC','RDS is a natural fit for orders; DynamoDB works for a lean catalog.'],
['02 SnapShare','Compute: EC2 or Lambda · S3 · DB: RDS or DynamoDB','CloudFront (global speed), Cognito','Both databases','Lambda + S3 + DynamoDB = 45 CC','Photos belong in S3, not in a database.'],
['03 CampusReg','Compute: EC2 or Lambda · RDS only · Cognito','Route 53 (easy address)','CloudFront (no media to speed up)','Lambda + RDS + Cognito = 50 CC','Linked records point to a relational database.'],
['04 FlashTix','Compute: EC2 or Lambda · DB: DynamoDB or RDS · CloudFront','Lambda (handles spikes), Route 53','Both databases','Lambda + DynamoDB + CloudFront = 50 CC','Lambda only costs while the spike lasts.'],
['05 StudyBuddy','Compute: EC2 or Lambda · S3 · Cognito','CloudFront, Route 53','Both databases (no need)','Lambda + S3 + Cognito = 35 CC','Files go to S3; Cognito keeps groups private.'],
['06 CampusRide','Compute: EC2 or Lambda · DynamoDB · Cognito','Lambda (short bursts), Route 53','S3 (no files to store)','Lambda + DynamoDB + Cognito = 45 CC','Rapid tiny updates suit DynamoDB.'],
['07 TinyBlog','S3 (hosts pages) · CloudFront · Route 53','Lambda (contact form)','EC2, RDS, or DynamoDB (each -5)','S3 + CloudFront + Route 53 = 35 CC','A static site needs no servers or databases.'],
['08 GameLeague','Compute: EC2 or Lambda · DynamoDB · Cognito','Lambda, CloudFront','RDS (scores change too fast)','Lambda + DynamoDB + Cognito = 45 CC','Leaderboards need very fast reads and writes.']];
KEY.forEach((d,i)=>{s=mk('HOST ONLY · ANSWER KEY '+(i+1)+' OF 8','Evaluation Card: '+d[0]);const q=sc(s,2,0.67,1.2);box(q,0,0,W,H,OR);
T(q,d[0],{x:0.25,y:0.15,w:5.5,h:0.35,fontSize:15,bold:true});
T(q,[{text:'Valid: ',options:{bold:true,color:CY}},{text:d[1]+'\n',options:{}},{text:'Bonus +5: ',options:{bold:true,color:CY}},{text:d[2]+'\n',options:{}},{text:'Overkill -5: ',options:{bold:true,color:CY}},{text:d[3]+'\n',options:{}},{text:'Cheapest valid: ',options:{bold:true,color:CY}},{text:d[4],options:{}}],{x:0.25,y:0.55,w:5.5,h:1.7,fontSize:10.5,paraSpaceAfter:3});
T(q,'Why: '+d[5],{x:0.25,y:2.3,w:5.5,h:0.4,fontSize:10,color:VIO,italic:true});});

// ---------- sample game
s=mk('HOST ONLY · SAMPLE GAME','Walkthrough: SnapShare, Team Orbit vs Team Nova');
box(s,0.4,1.3,6.0,5.5);box(s,6.93,1.3,6.0,5.5,CY);
T(s,[{text:'THE AUCTION\n',options:{color:CY,bold:true,fontSize:13}},
{text:'S3 (start 10): Orbit 12, Nova 14, Orbit 16. Orbit wins at 16; Nova takes the 2nd copy at 14.\nLambda (start 15): Nova 15, Orbit 18, Nova 20. Nova wins at 20.\nEC2 (start 20): Orbit 22 uncontested.\nDynamoDB (start 20): Orbit 20 uncontested.\nCloudFront (start 15): Orbit 15 uncontested.\nRDS (start 25): Nova 25. Cognito (start 10): Nova 10.\nRoute 53: no bids; skipped.',options:{fontSize:11.5}}],{x:0.7,y:1.55,w:5.4,h:5,paraSpaceAfter:6});
T(s,[{text:'THE RESULT\n',options:{color:CY,bold:true,fontSize:13}},
{text:'Orbit: S3 16, EC2 22, DynamoDB 20, CloudFront 15 = 73 CC. Left: 27.\n30 (all needs) + 5 (CloudFront) + 5 (budget) + 3 (pitch) = 43.\n\nNova: S3 14, Lambda 20, RDS 25, Cognito 10 = 69 CC. Left: 31.\n30 + 5 (Cognito) + 6 (budget) + 3 (pitch) = 44.\n\nNova wins 44 to 43 by spending less. Teaching moment: the right build at a smart price beats the biggest cart.',options:{fontSize:11.5}}],{x:7.23,y:1.55,w:5.4,h:5,paraSpaceAfter:4});
pres.writeFile({fileName:'../downloads/Bid_or_Go_Broke_AWS_SBG_BZU_Printables.pptx'}).then(()=>console.log('ok'));
