# ANDREY LAPPO

**Phone:**   +375 29 697 24 48
 
**Email:**     <lappoAdy@gmail.com>

**Skype:**     silent5127

**[Linkedin](https://www.linkedin.com/in/andrey-lappo-425763138/)** 

![myPhoto](https://i.ibb.co/rmfYX86/photo.jpg)

	      	

## Objective

JavaScript/Front-end, Python Developer

## Summary

I have fifteen years of experience in software development. Vast experience in working with SQLite, Postgre databases, etc. developed and implemented a variety of reports. 

Additionally I was interviewing and onboarding new colleagues, helping them to understand our product, managing they activities.

Apart from that I’ve been studying Python on my own for a year and graduated from web development courses in June. At the moment I continue to study Python, Django, Flask, JavaScript, HTML5 and CSS . The skills I gained were applied in the development of a website for the pharmaceutical market.

My current firm is too small to grow up. I want more interesting projects, new knowledges and new experience.
 
## Skills 

- Python (Programming Language)
- Django
- SQL
- HTML5
- JavaScript
- Bootstrap
- PHP
- Cascading Style Sheets (CSS)
- Community Organizing
- Organizational Leadership
- Disaster Response

**Estimated English level:**   A2
        
## Work experience 


**2011 - 2021 – Deputy Director**, Farmaservice
**Main responsibilities:**
- working with SQLite, Postgre databases
- interviewing and onboarding new colleagues
- managing they activities
- php development
- JavaScript development
- python development
- django development
- support software
- developed and implemented a variety of reports
- meeting with clients
- disaster response

**Achievements:**
- new 200+ unic clients
- over 700+ success computerized retail stores
- online ordering system for pharmaceutical products

**2009-2011 – SQL Developer**, Farmaservice
**Main responsibilities:**
- installing software to clients
- support software
- developed and implemented a variety of reports

**2008-2009 – Position**, Farmaservice
**Main responsibilities:**
- installing software to clients
- support software

**2007 -2008 – Junior Specailist**, Farmaservice
**Main responsibilities: **
- installing software to clients

## Education 

**Mar 2021 – Jun 2021 – Educational Center for Programming and High Tech
(IT-Academy)**
Course: Python Developer
Description: Course in Python Web Application Development

[Certificate](https://www.linkedin.com/in/andrey-lappo-425763138/detail/treasury/position:1795884490/?entityUrn=urn%3Ali%3Afsd_profileTreasuryMedia%3A(ACoAACGSUJ0BVS7JARBG2hJEUOw35OpDlLKUl7k%2C1635460897299)&parentEntityUrn=urn%3Ali%3Afsd_profilePosition%3A(ACoAACGSUJ0BVS7JARBG2hJEUOw35OpDlLKUl7k%2C1795884490)&section=position%3A1795884490&treasuryCount=1)



**2005 – 2010  – Belorusian National Technical University**
Specialization: Information Technology
Degree: Engineer's Degree




## Additional Information

Professional interests: 
- [Python for profesionals in telegram](https://t.me/ru_python) 
- [Django for profesionals in telegram](https://t.me/pydjango)
- [Python Developers Community in linkedin](https://www.linkedin.com/groups/25827/)
- [Django Developers Community in linkedin](https://www.linkedin.com/groups/50788/)
- [HTML5 / CSS3 / Javascript (HTML / CSS / JS) in linkedin](https://www.linkedin.com/groups/4192947/)
- [Front End Developer Group in linkedin](https://www.linkedin.com/groups/2231152/)
- [JavaScript in linkedin](https://www.linkedin.com/groups/121615/)

**Military obligation status:** еxclusion from military registration

## References 
 
### [Mikita Tsiarentsyeu](https://www.linkedin.com/in/mikita-tsiarentsyeu-32036a197/)
**Lead Software Engineer at EPAM Systems
June 18, 2021, Mikita was Andrey’s teacher**

>Andrey was student at ITAcademy (Python training course), and I have a good impression of him. Andrey properly learned all materials and completed all tasks in a timely manner, and in general is very responsible. He is very thoughtful person, who would ask interesting and relevant questions in order to understand new material. Andrey has a good grasp of practical usage of Django framework, and I would like to specifically highlight his skill and knowledge in area of working with relational databases (postgre and sqlite). He is also good in communication with his colleagues and clients, not hesitant to take initiative and help someone when needed.

## Code example:


```
from random import randint 

class Creature:

    def __init__(self, health, min_attack, max_attack, min_defense, max_defense):
        self.health = health
        self.min_attack = min_attack
        self.max_attack = max_attack
        self.min_defense = min_defense
        self.max_defense = max_defense
       


class Hero(Creature):
    def __init__(self, health, min_attack, max_attack, min_defense, max_defense, chanse_crit):
        Creature.__init__(self, health, min_attack, max_attack, min_defense, max_defense)
        self.chanse_crit = chanse_crit


class Monster(Creature):
    def __init__(self):
        Creature.__init__(self, randint(10, 500), 25, 35, 0, 15)





def fight():
    die=''
    health=250
    min_attack=10
    max_attack=20
    min_defense=0
    max_defense=30
    chanse_crit=0

    H = Hero(health, min_attack, max_attack, min_defense, max_defense, chanse_crit)
    M = Monster()

    count = 1

    print(f"Hero find monster!")
    print(f"Monster have {M.health} health, attack {M.min_attack} - {M.max_attack}, defense {M.min_defense} - {M.max_defense}.")
    print(f"Hero have {H.health} health, attack {H.min_attack} - {H.max_attack}, defense {H.min_defense} - {H.max_defense}.")

    while H.health >= 0 and  M.health >= 0:
       
        H_defense = randint(H.min_defense, H.max_defense)
        M.attack  = randint(25, 35)
        H.health =  H.health +  H_defense  - M.attack
        if (M.attack - H_defense )>0:
            print(f"Monster atack! He made {M.attack} damage! Hero health {H.health}.")
        else:
            print(f"Monster atack! He made no damage! Hero laughed: 'AHAHAHAHA'.")
        if H.health<=0:
            break
        M.defense = randint(0, 10)
        H_attack  = randint(H.min_attack, H.max_attack)
        H.chanse_crit = randint(0, 100)
        
        if H.chanse_crit>50:
            print(f"==>>>Hero have a crit strike! His attack X2 {H_attack}!<<<===")
            H_attack=H_attack*2
        M.health =  M.health +  M.defense- H_attack
        if (H_attack - M.defense )>0:
            print(f"Hero atack! He made {H_attack} damage! Monster health {M.health}.")
        else:
            print(f"Hero atack! He made no damage! Monster laughed.")
            
        if M.health<=0 or H.health<=0:
            break
        count +=1

    if H.health > M.health:
        print(f"Hero has won! He made {count} strikes! Health left {H.health}.\n------------------------------------------")
        die='Monster'
        return   die

    else:
        print(f"Hero DIE! Monster has won! He made {count} strikes!  Health left {M.health}.\n------------------------------------------")
        die='Hero'
        return  die
   
    
print(fight())
```
        
    



