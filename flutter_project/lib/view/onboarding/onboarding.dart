import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:flutter_project/view/onboarding/onboarding_state.dart';

class Tutorial extends StatelessWidget {
  const Tutorial({super.key});

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (context) => OnboardingState(),
      child: Scaffold(
        body: Center(
          child: Padding(
            padding: const EdgeInsets.all(30.0),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                // const Spacer(),
                const Image(image: AssetImage('assets/logo/logo1.png')),
                Consumer<OnboardingState>(
                  builder: (context, onBoarding, _) => Image(
                    width: 260,
                    height: 260,
                    image: AssetImage(
                      onBoarding.imageLocation,
                    ),
                    fit: BoxFit.cover,
                  ),
                ),
                Column(
                  children: [
                    Consumer<OnboardingState>(
                      builder: (context, onBoarding, _) => Container(
                        margin: const EdgeInsets.only(bottom: 10),
                        child: Text(
                          onBoarding.title,
                          style: const TextStyle(
                              fontSize: 28, fontWeight: FontWeight.bold),
                        ),
                      ),
                    ),
                    Consumer<OnboardingState>(
                      builder: (context, onBoarding, _) => Padding(
                        padding: const EdgeInsets.only(left: 40.0, right: 40.0),
                        child: Text(
                          onBoarding.description,
                          style: const TextStyle(
                            fontSize: 18,
                          ),
                          textAlign: TextAlign.center,
                        ),
                      ),
                    )
                  ],
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Consumer<OnboardingState>(
                      builder: (context, onBoarding, _) => Container(
                        margin: const EdgeInsets.only(right: 20),
                        width: 32,
                        height: 8,
                        decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(4),
                            color: onBoarding.onBoardingIndicator(0)),
                      ),
                    ),
                    Consumer<OnboardingState>(
                      builder: (context, onBoarding, _) => Container(
                        margin: const EdgeInsets.only(right: 20),
                        width: 32,
                        height: 8,
                        decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(4),
                            color: onBoarding.onBoardingIndicator(1)),
                      ),
                    ),
                    Consumer<OnboardingState>(
                      builder: (context, onBoarding, _) => Container(
                        width: 32,
                        height: 8,
                        decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(4),
                            color: onBoarding.onBoardingIndicator(2)),
                      ),
                    )
                  ],
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    Material(
                      borderRadius: BorderRadius.circular(12),
                      child: Container(
                        width: 156,
                        height: 50,
                        decoration: BoxDecoration(
                            border: Border.all(width: 1.0),
                            color: Colors.white,
                            borderRadius: BorderRadius.circular(12)),
                        child: Material(
                          borderRadius: BorderRadius.circular(12),
                          color: Colors.transparent,
                          child: Consumer<OnboardingState>(
                            builder: (context, onBoarding, _) => InkWell(
                              borderRadius: BorderRadius.circular(12),
                              onTap: () {
                                if (onBoarding.onBoardingNumber > 0) {
                                  onBoarding.setOnBoardingNumber = 'back';
                                }
                              },
                              child: Center(
                                child: Text(
                                  onBoarding.onBoardingNumber == 0
                                      ? "Skip"
                                      : "Back",
                                  style: const TextStyle(
                                      color: Colors.black,
                                      fontSize: 15,
                                      fontWeight: FontWeight.bold,
                                      fontFamily: 'DM Sans'),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                    Material(
                      borderRadius: BorderRadius.circular(12),
                      child: Container(
                        width: 156,
                        height: 50,
                        decoration: BoxDecoration(
                            color: Colors.orange,
                            borderRadius: BorderRadius.circular(12)),
                        child: Material(
                          borderRadius: BorderRadius.circular(12),
                          color: Colors.transparent,
                          child: Consumer<OnboardingState>(
                            builder: (context, onBoarding, _) => InkWell(
                              borderRadius: BorderRadius.circular(12),
                              onTap: () {
                                if (onBoarding.onBoardingNumber < 2) {
                                  onBoarding.setOnBoardingNumber = 'next';
                                }
                              },
                              child: Center(
                                child: Text(
                                  onBoarding.onBoardingNumber == 2
                                      ? "Start"
                                      : "Next",
                                  style: const TextStyle(
                                      color: Colors.white,
                                      fontSize: 15,
                                      fontWeight: FontWeight.bold,
                                      fontFamily: 'DM Sans'),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    )
                  ],
                ),
                // const Spacer()
              ],
            ),
          ),
        ),
      ),
    );
  }
}
