"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { Check } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function PricingSection() {
    const plans = [
        {
            name: "Free",
            price: "0",
            features: [
                "30 menit transcribe/hari",
                "Basic accuracy",
                "2 bahasa",
                "Export ke TXT",
                "Support email",
            ],
            popular: false,
            buttonText: "Mulai Gratis",
            gradient: "from-gray-400 to-gray-600"
        },
        {
            name: "Pro",
            price: "15",
            features: [
                "3 jam transcribe/hari",
                "Enhanced accuracy",
                "30+ bahasa",
                "Export ke TXT, DOCX, SRT",
                "Priority support",
                "Speaker detection",
                "Custom vocabulary"
            ],
            popular: true,
            buttonText: "Mulai 14-Hari Trial",
            gradient: "from-blue-500 to-cyan-400"
        },
        {
            name: "Enterprise",
            price: "Custom",
            features: [
                "Unlimited transcribe",
                "Highest accuracy",
                "100+ bahasa",
                "All export formats",
                "Dedicated support",
                "API access",
                "Custom integration",
                "SLA guarantee"
            ],
            popular: false,
            buttonText: "Hubungi Sales",
            gradient: "from-purple-500 to-blue-500"
        }
    ];

    const containerVariants = {
        hidden: { 
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                when: "beforeChildren"
            }
        },
        exit: {
            opacity: 0,
            transition: {
                staggerChildren: 0.2,
                staggerDirection: -1,
                when: "afterChildren"
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0,
            y: 50,
            scale: 0.9
        },
        visible: { 
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        },
        exit: { 
            opacity: 0,
            y: 50,
            scale: 0.9,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    const featureVariants = {
        hidden: { 
            opacity: 0,
            x: -20 
        },
        visible: { 
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3
            }
        },
        exit: { 
            opacity: 0,
            x: -20,
            transition: {
                duration: 0.3
            }
        }
    };

    const titleVariants = {
        hidden: { 
            opacity: 0, 
            y: 20 
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5
            }
        },
        exit: { 
            opacity: 0, 
            y: 20,
            transition: {
                duration: 0.5
            }
        }
    };

    function Card({ plan }: { plan: any }) {
        const cardRef = useRef<HTMLDivElement>(null);
        const x = useMotionValue(0);
        const y = useMotionValue(0);

        const rotateX = useTransform(y, [-100, 100], [30, -30]);
        const rotateY = useTransform(x, [-100, 100], [-30, 30]);

        const springConfig = { damping: 20, stiffness: 200 };
        const springRotateX = useSpring(rotateX, springConfig);
        const springRotateY = useSpring(rotateY, springConfig);

        function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
            if (!cardRef.current) return;
            
            const rect = cardRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const mouseX = e.clientX - centerX;
            const mouseY = e.clientY - centerY;

            x.set(mouseX);
            y.set(mouseY);
        }

        function onMouseLeave() {
            x.set(0);
            y.set(0);
        }

        return (
            <motion.div 
                ref={cardRef}
                variants={cardVariants}
                style={{
                    perspective: 1000,
                }}
                className={`relative ${plan.popular ? 'md:-mt-4' : ''}`}
            >
                <motion.div
                    style={{
                        rotateX: springRotateX,
                        rotateY: springRotateY,
                    }}
                    onMouseMove={onMouseMove}
                    onMouseLeave={onMouseLeave}
                    className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-[4px] border border-white/10 \
                        hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                    
                    {plan.popular && (
                        <motion.div 
                            className="absolute -top-4 left-0 right-0 mx-auto w-fit px-4 py-1 rounded-full 
                                bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-medium"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            Most Popular
                        </motion.div>
                    )}

                    <div className="relative">
                        <motion.div className="text-center mb-8">
                            <h3 className="text-xl font-bold text-white mb-4">{plan.name}</h3>
                            <div className="flex items-baseline justify-center">
                                {plan.price === "Custom" ? (
                                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                                ) : (
                                    <>
                                        <span className="text-2xl font-medium text-gray-400">$</span>
                                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                                        <span className="text-gray-400 ml-2">/bulan</span>
                                    </>
                                )}
                            </div>
                        </motion.div>

                        <motion.ul className="space-y-4 mb-8">
                            {plan.features.map((feature: string, i: number) => (
                                <motion.li 
                                    key={i}
                                    variants={featureVariants}
                                    className="flex items-center text-gray-300"
                                >
                                    <Check className="h-5 w-5 text-cyan-400 mr-3" />
                                    {feature}
                                </motion.li>
                            ))}
                        </motion.ul>

                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`w-full py-4 px-6 rounded-xl font-medium transition-all duration-200 
                                bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white`}
                        >
                            {plan.buttonText}
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>
        );
    }

    return (
        <AnimatedSection className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    className="text-center mb-16"
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: false }}
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Simple Pricing
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Pilih plan yg sesuai dgn kebutuhan kmu
                    </p>
                </motion.div>

                <motion.div 
                    className="grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: false, margin: "-100px" }}
                >
                    {plans.map((plan, index) => (
                        <Card key={index} plan={plan} index={index} />
                    ))}
                </motion.div>
            </div>
        </AnimatedSection>
    );
}