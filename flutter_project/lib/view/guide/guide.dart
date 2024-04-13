import 'package:flutter/material.dart';

class Guide extends StatelessWidget {
  const Guide({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white24,
      appBar: AppBar(
        flexibleSpace: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              const Image(image: AssetImage('assets/home/logo1.png')),
              const Text(
                'Goship',
                style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 30,
                    fontFamily: 'LibreBaskerville'),
              ),
              Container(
                width: 50,
                  height: 50,
                  decoration:
                      BoxDecoration(borderRadius: BorderRadius.circular(10)),
                  child: const Image(
                    image: AssetImage(
                      'assets/home/Profile_Photo1.png',
                    ),
                    fit: BoxFit.contain,
                  ))
            ],
          ),
        ),
      ),
      body: Container(
        child: Column(
          children: [
            const SizedBox(height: 10),
            Center(
              child: Container(
                width: MediaQuery.of(context).size.width * 0.85,
                margin: const EdgeInsets.symmetric(vertical: 20),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(12),
                  color: const Color.fromARGB(255, 239, 239, 239).withOpacity(0.9),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(
                      decoration: BoxDecoration(
                        borderRadius: const BorderRadius.only(
                          topLeft: Radius.circular(12),
                          topRight: Radius.circular(12),
                        ),
                        image: const DecorationImage(
                          image: AssetImage('assets/guide/image21.png'),
                          fit: BoxFit.cover,
                        ),
                        boxShadow: [
                          BoxShadow(
                            color: const Color.fromARGB(255, 37, 36, 36)
                                .withOpacity(0.8),
                            blurRadius: 8,
                            offset: const Offset(0, 2),
                          ),
                        ],
                      ),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: [
                          Padding(
                            padding: const EdgeInsets.only(right: 0.0),
                            child: Align(
                              alignment: Alignment.centerLeft,
                              child: Padding(
                                padding: const EdgeInsets.all(16.0),
                                child: Image.asset(
                                  'assets/guide/Headline.png',
                                  width: 20,
                                  height: 45,
                                  fit: BoxFit.contain,
                                ),
                              ),
                            ),
                          ),
                          const Padding(
                            padding: EdgeInsets.only(right: 5.0),
                            child: Align(
                              alignment: Alignment.bottomCenter,
                              child: Padding(
                                padding: EdgeInsets.all(16.0),
                                child: Text(
                                  'Instructions for \ndoing an internship (KP)',
                                  style: TextStyle(
                                    color: Colors.white,
                                    fontWeight: FontWeight.bold,
                                    fontSize: 18,
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                    Container(
                      color: Colors.white,
                        height: MediaQuery.of(context).size.height / 1.75,
                        child: ListView(
                          children: [
                            Container(
                              padding: const EdgeInsets.all(20),
                              color: Colors.white,
                              child: const Text(
                                '1. Select the KP type:\n      a. Regular\n      b. IISMA via UP2AI Ms Lely and KUI Mr Iwan Syarif\n      c. IGIP via UP2AI Ms Lely and KUI Mr Iwan Syarif\n\n2. If you have a Regular KP, determine whether you are a group or individual when carrying out the KP. \n       If you are in a group of up to 3 people, fill in the KP Submission Form in Online MIS (If in a group, then only the representative will fill it in)\n\n3. Make a KP Proposal, Make a Cover Letter (letter number, and KDAEP designation to be handled via Ms Pipid), make a thank you letter when it is received (letter number and KDAEP designation to be managed via Ms Pipid), Farewell to the Supervisor before leaving for KP\n\n4. Implementation of KP 6 Months\n\n5. Making a KP Logbook, the file filled in is the progress of the KP book, photos uploaded can be daily activities at the company (free photos)\n\n6. Preparation for KP Session\n        a. ACC Supervisor\n        b. KP Book\n        c. KP Presentation (Indonesia)\n        d. advance in groups\n        e. Collect Value from the Company\n       f. Collect Mandiri Bank Account (KP funds)',
                                style: TextStyle(
                                  fontSize: 18,
                                  color: Colors.black,
                                ),
                              ),
                            )

                          ],
                        )),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 10),
          ],
        ),
      ),
    );
  }
}
