---
title: "MATH 135 Notes"
date: "2020-09-08"
type: "note"
tags: "math135, proofs"
---


- [Mobius notes](#mobius-notes)
- [Bonus Quiz 3: How RSA is used in TLS](#bonus-quiz-3-how-rsa-is-used-in-tls)
- [1.2 Sets](#12-sets)
- [1.3 Mathematical Statements and Negation](#13-mathematical-statements-and-negation)
- [1.4 Quantifiers and Quantified Statements](#14-quantifiers-and-quantified-statements)
  - [Quantified Statements](#quantified-statements)
  - [Negation of Quantifiers](#negation-of-quantifiers)
    - [Negating Universal quantifier](#negating-universal-quantifier)
    - [Negating Existential quantifier](#negating-existential-quantifier)
- [1.5 Nested Quantifiers](#15-nested-quantifiers)
  - [Two quantifiers](#two-quantifiers)
    - [Universal + Existential](#universal--existential)
    - [Universal + Universal](#universal--universal)
    - [Existential + Existential](#existential--existential)
  - [Arbitrary number of quantifiers](#arbitrary-number-of-quantifiers)
  - [Negation of nested quantifiers](#negation-of-nested-quantifiers)
    - [Number theory example 1: Goldbach's conjecture](#number-theory-example-1-goldbachs-conjecture)
    - [Number theory example 2: Waring's Problem](#number-theory-example-2-warings-problem)
    - [Number theory example 3: Fermat's Last Theorem](#number-theory-example-3-fermats-last-theorem)
- [2.1 Truth Tables and Negation](#21-truth-tables-and-negation)
- [2.2 Conjunction and Disjunction](#22-conjunction-and-disjunction)
- [2.3 Logical Operators and Algebra](#23-logical-operators-and-algebra)
  - [Commutative/associative/distributive laws](#commutativeassociativedistributive-laws)
  - [Transitivity](#transitivity)
  - [Proof by truth tables vs proof by Boolean laws](#proof-by-truth-tables-vs-proof-by-boolean-laws)
- [2.4 Implication](#24-implication)
  - [Implication worked example video](#implication-worked-example-video)
  - [Assuming the hypothesis](#assuming-the-hypothesis)
  - [Implication and disjunction in hypothesis](#implication-and-disjunction-in-hypothesis)
  - [Implication and disjunction in conclusion](#implication-and-disjunction-in-conclusion)
  - [Elimination Method](#elimination-method)
- [2.5 Converse and Contrapositive](#25-converse-and-contrapositive)
  - [If and only if (iff)](#if-and-only-if-iff)
- [3.0 Proving Mathematical statements](#30-proving-mathematical-statements)
  - [Proving Universally Quantified Statements](#proving-universally-quantified-statements)
    - [Direct Proof](#direct-proof)
    - [Examples](#examples)
    - [Counterxamples](#counterxamples)
  - [Proving Implications](#proving-implications)
    - [Even and odd](#even-and-odd)
  - [Divisibility of Integers](#divisibility-of-integers)
  - [Transitivity of Integers](#transitivity-of-integers)
  - [Proof by contrapositive](#proof-by-contrapositive)
- [3.6 Proof by Contradiction](#36-proof-by-contradiction)
  - [Example of proof by contradiction](#example-of-proof-by-contradiction)
  - [Disproving implications by contradiction](#disproving-implications-by-contradiction)
  - [Proving Uniqueness](#proving-uniqueness)
- [3.7 Proving If and Only if Statements](#37-proving-if-and-only-if-statements)
  - [Example of proving iff statements](#example-of-proving-iff-statements)
- [4.1 Notation for Summations, Products, Recurrences](#41-notation-for-summations-products-recurrences)
  - [Notation for Summations](#notation-for-summations)
  - [Notation for Products](#notation-for-products)
  - [Notation for Recurrence Relations](#notation-for-recurrence-relations)
- [Proof by induction](#proof-by-induction)
  - [Induction](#induction)
  - [Induction Example 1: Summation](#induction-example-1-summation)
  - [Induction example 2: reasoning with inequalities](#induction-example-2-reasoning-with-inequalities)
  - [Induction example 3: A recurrence relation that produces a square](#induction-example-3-a-recurrence-relation-that-produces-a-square)
- [Binomial Theorem](#binomial-theorem)
  - [Pascal's identity](#pascals-identity)
  - [Binomial Theorem I](#binomial-theorem-i)
  - [Binomial Theorem II](#binomial-theorem-ii)
- [4.4 Proof By Strong Induction](#44-proof-by-strong-induction)
  - [Example - any number represented as a sum of powers of 2](#example---any-number-represented-as-a-sum-of-powers-of-2)
- [5.0 Introduction to Sets](#50-introduction-to-sets)
- [5.1  Set Builder Notation](#51--set-builder-notation)
  - [Notation Type 1](#notation-type-1)
  - [Example Notation Type 1](#example-notation-type-1)
  - [Notation Type 2](#notation-type-2)
  - [Example Notation Type 2](#example-notation-type-2)
  - [Notation type 3](#notation-type-3)
  - [Example notation type 3](#example-notation-type-3)
- [Set operations](#set-operations)
    - [Set operations identities](#set-operations-identities)
- [5.4 Subsets of a set](#54-subsets-of-a-set)
  - [Examples of subsets](#examples-of-subsets)
  - [Subset identity](#subset-identity)
- [5.5 Subsets](#55-subsets)
  - [Proving Subset examples](#proving-subset-examples)
  - [Equal Sets](#equal-sets)
- [6.1 Division Algorithm](#61-division-algorithm)
  - [Divisibility and Bounds](#divisibility-and-bounds)
- [6.2 Greatest Common Divisor](#62-greatest-common-divisor)
  - [Properties of GCD](#properties-of-gcd)
  - [GCD with Remainders](#gcd-with-remainders)
  - [Euclidean Algorithm](#euclidean-algorithm)
- [6.3 Certificate of Correctness and Bezout's Lemma](#63-certificate-of-correctness-and-bezouts-lemma)
  - [GCD Characterization Theorem](#gcd-characterization-theorem)
  - [Bezout's Lemma aka Bezout's Identity](#bezouts-lemma-aka-bezouts-identity)
- [6.4 Extended Euclidean Algorithm](#64-extended-euclidean-algorithm)
- [More properties of GCD](#more-properties-of-gcd)
  - [Common Divisors](#common-divisors)
  - [Coprime integers](#coprime-integers)
  - [Coprimeness proofs (TODO)](#coprimeness-proofs-todo)
  - [Division by GCD](#division-by-gcd)
- [Prime Numbers](#prime-numbers)
- [6.7 Unique Factorization Theorem](#67-unique-factorization-theorem)
  - [Euclid's Lemma](#euclids-lemma)
  - [Unique Factorization Theorem](#unique-factorization-theorem)
  - [Finding A Prime Factor](#finding-a-prime-factor)
- [Prime factorizations and GCD](#prime-factorizations-and-gcd)
- [Linear diophantine equations](#linear-diophantine-equations)
  - [Finding solutions to Diophantine equations](#finding-solutions-to-diophantine-equations)
- [7.2 Finding All Solutions to A Diophantine Equation in Two Variables](#72-finding-all-solutions-to-a-diophantine-equation-in-two-variables)
- [8.1 Congruence](#81-congruence)
- [8.2 Elementary Properties of Congruence](#82-elementary-properties-of-congruence)
  - [Further Properties of Congruence](#further-properties-of-congruence)
- [8.3 Congruence and Remainders](#83-congruence-and-remainders)
  - [Examples](#examples-1)
  - [Square and Multiply Algorithm](#square-and-multiply-algorithm)
  - [Divisibility Tests](#divisibility-tests)
- [8.4 Linear Congruences](#84-linear-congruences)
  - [8.5 Non-Linear Congruences](#85-non-linear-congruences)
- [8.6 Congruence Classes and Modular Arithmetic](#86-congruence-classes-and-modular-arithmetic)
  - [Congruence Classes and Modular Arithmetic](#congruence-classes-and-modular-arithmetic)
  - [Arithmetic of Congruence Classes](#arithmetic-of-congruence-classes)
  - [Properties of Modular Arithmetic](#properties-of-modular-arithmetic)
    - [Multiplicative inverse](#multiplicative-inverse)
  - [Examples](#examples-2)
- [8.7 Fermat's Little Theorem](#87-fermats-little-theorem)
- [Chinese Remainder Theorem](#chinese-remainder-theorem)
- [Splitting a Modulus](#splitting-a-modulus)
- [RSA](#rsa)
  - [Setting up RSA](#setting-up-rsa)
  - [RSA Encryption](#rsa-encryption)
  - [RSA Decyrption](#rsa-decyrption)
- [Standard Form Complex Numbers](#standard-form-complex-numbers)
  - [Complex Arithemtic](#complex-arithemtic)
  - [Properties of Complex Numbers](#properties-of-complex-numbers)
  - [Properties of Complex Arithmetic](#properties-of-complex-arithmetic)
  - [Binomial Theorem for complex numbers](#binomial-theorem-for-complex-numbers)
- [Conjugate and Modulus](#conjugate-and-modulus)
  - [Properties of the Conjugate (PCJ)](#properties-of-the-conjugate-pcj)
  - [Properties of the Modulus (PM)](#properties-of-the-modulus-pm)
  - [More Properties](#more-properties)
- [Complex Plane and Polar Form](#complex-plane-and-polar-form)
  - [Polar Form](#polar-form)
  - [Polar Multiplication](#polar-multiplication)
- [De Moivre's Theorem](#de-moivres-theorem)
- [Complex n-th roots](#complex-n-th-roots)
- [Square Roots and the Quadratic Formula](#square-roots-and-the-quadratic-formula)

# Mobius notes
- Type a command then **CTRL SPACE** to quickly transform it in the equation editor. E.g. `abs(x)`, `x^2`, `10^(1/4)`. 

- When there are multiple answers, enter them separated by a comma.
- **Mobius only allows multiplication using the multiplication symbol.** For example, `2*x` is allowed, but not `2x`. 

# Bonus Quiz 3: How RSA is used in TLS 
**Transport Layer Security (TLS)**: The cryptographic protocol used to secure data transmitted between web browsers and websites. 

**Symmetric Key Encryption**: 
1. Alice usees a secret key $k$ to encrypt the plaintext $M$. She sends the resulting ciphertext $C$ to Bob.
2. Bob uses the same secret key $k$ to decrypt $C$ and recovers $M$. 
3. Here, $k$ is a secret key that only Alice and Bob know.
4. Most commonly Symmetric-key encryption scheme: Advanced Encryption Standard (AES). 
5. **PROBLEM**: How to share $k$ securely?

**SOLUTION**: Use RSA public key encryption (1977).
1. Alice obtains Bob's RSA public key $(e,n)$.
2. Alice selects a secret key $k$ at random.
3. Slice computes $c=k^e \; mod \; n$ and sends $c$ to Bob.
4. Bob decrypts $c$ to get $k=c^d \; mod \; n$. 

RSA is slower than AES encryption but RSA encryption is fast since $k$ is a small message, up to 256 bits in length

Question: How does Alice obtain an authentic copy of Bob's public key $(n,e)$? 

# 1.2 Sets
> Definition **Set**: A **set** is a well-defined, unordered collection of distinct objects. Each object that appears in this collection is called an element (or member) of the set. 

Examples of sets:
- $\{2, 4, 6, 8\}$ is the set of all positive even numbers less than 10
- The **natural numbers** is denoted by $\mathbb{N}= \{1,2,3, ...\}$.
- The set of **integers** is denoted by $\mathbb{Z} = \{... -2, -1, 0, 1, 2, ...\}$. 
- The **non-negative integers** are denoted by $N \cup \{0 \}$
- The set of **rational numbers** is denoted by $\mathbb{Q} = \frac{a}{b}$ where $a, b \in \mathbb{Z}$. 
- The set of **irrational numbers** are denoted by $\mathbb{\bar{Q}}$. Examples include $\sqrt{2}, \pi, e$, etc.
- The set of **real numbers** is denoted by $\mathbb{R}$ and contains all numbers in decimal form.


# 1.3 Mathematical Statements and Negation
> Definition **Statement**: A statement is a sentence that is either **true** or **false**.
For example:
- $2 + 3 = 6$ (true)
- $\pi + 2 \geq 5$ (true)
- $\sqrt{2}$ is a rational number (false)

> Definition **Negation**: Suppose $A$ is a statement. Then the **negation** of $A$ is $\neg A$. When $A$ is true, then $\neg A$ is false, and vice versa.

Note that $\neg (\neg A)\equiv A$, that is, they are **logically equivalent**.

Examples of mathematical statements **[TEST]**:
- $\pi = 0$
- 1 = 2
- There is a least natural number.
- All even numbers are prime.

Examples of non-mathematical statements **[TEST]**:
- Is 9 even? (*questions cannot be statements*)
- $n^2 = 9$ (*open sentence, domain unspecified*)
- The line with equation $y = mx + b$ crosses the $x$-axis (*open sentence*). 

# 1.4 Quantifiers and Quantified Statements
The statements
$$
\text{1. For all integers } n \geq 5:
\\
2^n > n^2
\\
\text{2. There exists at least one integer a such that}
\\
a^2 + 29a + 209 \leq 0
\\
$$
are **quantified statements**. A quantified statement:
- Involve a variable ($n, a$, etc)
- A domain, a special set of numbers
- An open sentence
- A quantifier ($\forall$ and $\exists$): How many elements are claimed to make the open sentence true

**Open sentence**: a sentence where the truth of the sentence is not known. It can be made true or false with more information (e.g. specifying a variable). Inequalities are open sentences. E.x. $4y + 5 = 3$. 

**Universal quantifier** (for all $\forall$): True for all

**Existential quantifier** (there exists $\exists$): True for at least one


## Quantified Statements
**Universally quantified statement**: 
$$ \forall x \in S, P(x) $$
Means "for all $x$ in $S$, $P(x)$ is true". 

**Existentially quantified statement**: 
$$ \exists x \in S, P(x) $$
Means "There exists at least one value of $x$ in $S$ for which $P(x)$ is true.

The quantifier is **universal** or **existential**, the variable is **$x$**, the domain is $S$, the open sentence is $P(x)$. 

## Negation of Quantifiers
### Negating Universal quantifier
$$ \neg(\forall x \in S, P(x)) \equiv (\exists x \in S, \neg P(x)) $$
**Interpretation**: The negation of "for all $x \in P(x)$ is true", will be "there exists some $x \in S$ for which $P(x)$ is false".


### Negating Existential quantifier
$$\neg(\exists x \in S, P(x)) \equiv (\forall x \in S, \neg P(x))$$
**Interpretation**: Negation of "there exists some $x \in S$ such that $P(x)$ is true" will be "for all $x \in S, P(x)$ is false". 

# 1.5 Nested Quantifiers
## Two quantifiers
### Universal + Existential
$$ \forall s \in \mathbb{R}, \exists t \in \mathbb{R}, t > s $$

Read from left to right: "For all real numbers $s$, there exist some $t$ such that $t > s$. 

**Order matters**: Consider if the quantifiers were switched:
$$ \exists t \in \mathbb{R}, \forall s \in \mathbb{R}, t > s $$

This is stating that "there exists some real $t$ such that $t$ is greater than $s$ for all reals. This is not true since $s$ can easily be $t+1$, which falsifies the statement.

Therefore:
$$ \forall x \in X, \exists y \in Y, Q(x,y)  \\ \neq \\
   \exists y \in Y, \forall x \in X, Q(x,y)
$$

### Universal + Universal
Switching the order of two universal quantifiers is logically equivalent. It doesn't matter if we select $x \in X$ before $y \in Y$ or vice versa.

$$ \forall x \in X, \forall y \in Y, Q(x,y)  \\ \equiv \\
   \forall y \in Y, \forall x \in X, Q(x,y)
$$

### Existential + Existential
Switching order of existential quantifies is also logically equivalent. It doesn't matter whether we select $x \in X$ or $y \in Y$ first. 

$$ \exists x \in X, \exists y \in Y, Q(x,y)  \\ \equiv \\
   \exists y \in Y, \exists x \in X, Q(x,y)
$$

## Arbitrary number of quantifiers
To read statements with an arbitary number of quantifiers, read from left to right and consider everything after the quantifier as an open sentence (which itself may contain more quantifiers and open statements). This gives us nested "layers":
$$ \exists x \in X, (\forall y \in Y, (\exists z \in Z, R(x,y,z))) $$

This can be represented as:

$$ \begin{cases} 
\exists x \in X, P(x)) & \\
\text{where P(x) is} \> \forall y \in Y, Q(x,y) \\
\text{where Q(x,y) is} \> \exists z \in Z, R(x,y,z)
\end{cases}
$$

## Negation of nested quantifiers
Negating nested quantifiers is straightforward when we negate layer-by-layer from left to right.

When negating a statement, 
- Every universal quantifier $\forall$ is replaced with existential quantifier $\exists$. 
- Every existential quantifier $\exists$  is replacced with universal quantifier $\forall$. 
- Every open sentence $R(k,p,q)$ is replaced with $\neg (k,p,q)$. 

### Number theory example 1: Goldbach's conjecture
**Goldbach's conjecture (1742)**: Every integer greater than 2 an be written as a sum of two primes. Represented as a universally quantified statement:
$$ \forall k \in \mathbb{N}_2, \exists p, q, \in \mathbb{P}, 2k=p+q
$$
Where $\mathbb{N}_2$ is the set of all integers greater than 1, and $\mathbb{P}$ is the set of all primes.

Negating Goldbach's conjecture:

$$ \neg (\forall k \in \mathbb{N}_2, \exists p, q, \in \mathbb{P}, 2k=p+q)
\\ \equiv \\
\exists k \in \mathbb{N}_2, \neg(\exists p, q, \in \mathbb{P}, 2k=p+q)
\\ \equiv \\
\exists k \in \mathbb{N}_2, \forall p, q, \in \mathbb{P}, \neg(2k=p+q)
\\ \equiv \\
\exists k \in \mathbb{N}_2, \forall p, q, \in \mathbb{P}, 2k \neq p+q
$$
To disprove Goldbach's conjecture, we would have to show that the above is true - *there exists an integer $k$ larger than one such that for all primes $p$ and $q$, $2k \neq p + q$*. 

### Number theory example 2: Waring's Problem
**Waring's problem (1770)**: *For every positive integer $k$, there exists a positive integer $s$ such that every positive integer is the sum of $s$ non negative integers to the power of $k$.* For example, for $k=2$, we can let $s=4$, i.e. every positive integer can be written as a sum of four perfect squares (e.g. $6 = 0^2 + 1^2 + 1^2 + 2^2$).

Formulating Waring's problem as a universally quantified statement:
$$
\forall k \in \mathbb{N}^+, \exists s \in \mathbb{Z}^+, \forall n \in \mathbb{N}^+, \exists x_1,x_2,x_3 \in \mathbb{N}_0, n=x_1^k+x_2^k ... x_s^k
$$
Its negation is:

$$
\exists k \in \mathbb{N}^+, \forall s \in \mathbb{Z}^+, \exists n \in \mathbb{N}^+, \forall x_1,x_2,x_3 \in \mathbb{N}_0, n\neq x_1^k+x_2^k ... x_s^k
$$
Waring's problem was proved in 1909. Therefore, its negation is false.

### Number theory example 3: Fermat's Last Theorem
**Fermat's Last Theorem**: *For every integer $n$ larger than $2$, the equation $x^n + y^n = z^n$ has no solutions in positive integers x,y, and z.*

Its universally quantified statement is therefore:
$$
\forall n \in \mathbb{N}^{2+}, \forall x,y,z, \space x^n + y^n \neq z^n
$$
And its negation will be:
$$
\exists n \in \mathbb{N}^{2+}, \exists x,y,z, \space x^n + y^n = z^n
$$
Fermat's Last Theorem was proven true in 1995. Therefore, the negation of Fermat's Last Theorem must be false.


# 2.1 Truth Tables and Negation
> Definition [not, negation]: The truth value "**not** $A$" is denoted by $\neg A$ and shown as the truth table below:
> 
> |$A$|$\neg A$|
>  |-|-|
>  |T|F|
>  |F|T|


**Statement variable**: A symbol in a truth table.

Useful fact: The negation of the negation of $A$ is the same as $A$.
$$
\neg (\neg A)A \equiv A
$$

# 2.2 Conjunction and Disjunction
**AND** and **OR**

> Definition [compound, component]: A **compound statement** is a statement composed of multiple individual statements, each of which is **component statement**.

> Definition [and, conjunction]: Let $A$ and $B$ be two statements. The truth value of $A$ **AND** $B$, also known as $A \wedge B$ is defined by the truth table
>
> |$A$|$B$|$A \wedge B$|
> |-|-|-|
> |T|T|T|
> |T|F|F|
> |F|T|F|
> |F|F|F|
>
> $A \wedge B$ is also known as the **conjunction** of $A$ and $B$.

> Definition [or, disjunction]: The truth value of $A$ **OR** $B$, also written as $A \vee B$ is defined by the truth table
> 
> |$A$|$B$|$A \vee B$|
> |-|-|-|
> |T|T|T|
> |T|F|T|
> |F|T|T|
> |F|F|F|


Example (**and**): 
Determine whether the universally quantified statement is true:

For all real numbers $x$, $x^2 \geq 0$ and $sin^2x + cos^2x = 1$

Solution: 

This can be symbollically written as
$$
\forall x \in \mathbb{R}, (x^2 \geq 0) \wedge (sin^2x + cos^2x = 1)
$$

The conjunction is only true when its components are both true. We know both components are true, therefore the statement is true.

Example (**or**):
For all real numbers $x$, $x^2 \leq 0$ or $x \geq 0$.
Symbollically, we write this as:
$$
\forall x \in \mathbb{R}, (x^3 \leq 0) \vee (x \geq 0)
$$
The statement is **true**. It is saying **either** $x^3 \leq 0$ or $x \geq 0$. When $x \leq 0$, we see $x^3 \leq 0$ is true, and when $x > 0$, the component $x \leq 0$ is true.


# 2.3 Logical Operators and Algebra
Brackets specify order of operations. For example, to determine $\neg (A \wedge B)$, consider $A \wedge B$ and then apply negation $\neg$.

> Definition [De Morgan's Laws]: For statement variables $A$ and $B$, we have:
>
> $\neg (A \wedge B) \equiv (\neg A) \vee (\neg B)\\$
> $\neg (A \vee B) \equiv (\neg A) \wedge (\neg B)$


## Commutative/associative/distributive laws
> **Commutative laws**:
>
> $A \wedge B \equiv B \wedge A \\$
> $A \vee B \equiv B \vee A \\$
>
> **Associative laws**:
> 
> $A \wedge (B \wedge C) \equiv (A \wedge B) \wedge C \\$
> $A \vee (B \vee C) \equiv (A \vee B) \vee C \\$
>
> **Distributive laws**:
>
> $A \wedge (B \vee C) \equiv (A \wedge B) \vee (A \wedge C) \\$
> $A \vee (B \wedge C) \equiv (A \vee B) \wedge (A \vee C) \\$

## Transitivity
If $S_1 \equiv S_2$ and $S_2 \equiv S_3$, then $S_1 \equiv S_3$. This is known as the **transitivity** of logical equivalence.

## Proof by truth tables vs proof by Boolean laws
As the number of statements $n$ increases, the number of entries in a truth table increases exponentially by $2^n$. E.g. 4 statements would require 16 rows.

**Use properties of boolean algebra when**:
1. There are many statements
2. The compound statements contain many convoluted statements.

**Consider truth tables when**:
1. There are few statements
2. When **disproving** the compound statements are equivalent, since it suffices to only provide one row that shows that logical equivalence is not held.


# 2.4 Implication

> Definition [implication, implies, hypothesis, conclusion]: Thhhhe truth value for $A$ **implies** $B$ is written as $A \Longrightarrow B$ and defined by the truth table:
> 
> |$A$|$B$|$A \Longrightarrow B$|
> |-|-|-|
> |T|T|T|
> |T|F|F|
> |F|T|T|
> |F|F|T|
>
> $A \Longrightarrow B$ is the **implication**, component $A$ is the **hypothesis**, and component $B$ is the **conclusion**.

Explanation: For an implication to be true, the truth of the hypothesis must be accompanied by the truth of the conclusion.

In words, an implication is written as:
$$
\text{If} \; A \; \text{is true, then} \; B \; \text{must be true.}
$$
Or simply
$$
\text{If} \; A \; \text{then} \; B
$$

## Implication worked example video

**If** *you do not dress warm in the winter*, **then** *you will catch a cold*.

($Hypothesis \Longrightarrow Conclusion$)

Can be reformulated as:

*Dress warm in the winter*, **or** *you will catch a cold*.
($\neg Hypothesis \vee Conclusion$)


We can do this because of the **equivalence**:
$$
A \Longrightarrow B \equiv \neg A \vee B
$$

**Worded example**: "If you don't shut up, then we go home" $\equiv$ "shut up or we go home". Or, "if you don't go to class then you will fail" $\equiv$ "go to class or you will fail".

How to prove this false?

Show that it is possible to **not** dress warm in the winter and stay healthy.

Or:
$$
\neg (A \Longrightarrow B) \\
\equiv \\
\neg(\neg A \vee B) \; \; \text{From our equivalence}\\
\equiv \\
A \wedge \neg B \; \; \text{from DML}
$$

- If implication is true but hypothesis is false, **we know nothing about the truth of the conclusion**:
- Conclusion can be true if someone dressed warm and caught a cold
- Conclusion can be false is someone dressed warm and caught a cold from another virus

- **Summary: The implication says nothing when the hypothesis is false**

**Hypothesis is false**: **implication is vacuously true**



## Assuming the hypothesis
If hypothesis is false, then there is no point determining whether the conclusion is true.

## Implication and disjunction in hypothesis
$$((A \vee B) \Longrightarrow C) \equiv ((A \Longrightarrow C) \wedge (B \Longrightarrow C))$$
That is, to prove a statement with a conjunction in the hypothesis, **we must prove that $A$ implies $C$ AND $B$ implies $C$.**

## Implication and disjunction in conclusion
$$A \Longrightarrow (B \vee C) \equiv (A \wedge (\neg B)) \equiv C $$

## Elimination Method
**Method of elminination:** To prove an implication of the form "If A then B or C", then we can prove "If A and not C then B" or "If A and not B then C".

That is:
$$
A \Rightarrow B \vee C \\
\equiv A \wedge \neg B \Rightarrow C \\
\equiv A \wedge \neg C \Rightarrow B
$$
are all logically equivalent. So if we prove any of them, the implication is true. 

# 2.5 Converse and Contrapositive
Variant of the implication: **interchange hypothesis and conclusion**

> Definition [converse]: $B \Longrightarrow A$ is the **converse** of $A \Longrightarrow B$.

Its truth table:

|$A$|$B$|$A \Longrightarrow B$|$B \Longrightarrow A$|
|-|-|-|-|
|T|T|T|T|
|T|F|F|T|
|F|T|T|F|
|F|F|T|T|

Notice that row $2$ and $3$ are not identical. I.e. flipping the implication is not logically equivalent:

Example:

For all real numbers $x$, if $x > 4$ then $x^2 > 9$ is TRUE

if $x^2 > 9$ then $x > 4$ is FALSE (consider $x = -5$)
More rigorously, the statement is written as:
$$ 
\forall x \in R, P(x)
$$
where $P(x)$ is the implication
$$
(x^2 > 9) \Longrightarrow (x > 4)
$$

> Definition [contrapositive]: The implication $(\neg B)) \Longrightarrow (\neg A)$ is the **contrapositive** of $A \Longrightarrow B$

**The contrapositive and the implication are logically equivalent**

$$
(A \Longrightarrow B) \equiv ((\neg B) \Longrightarrow (\neg A))
$$

Proof:

|$A$|$B$|$A \Longrightarrow B$|$(\neg B)$|$(\neg A)$|$(\neg B) \Longrightarrow (\neg A)$|
|-|-|-|-|-|-|
|T|T|T|F|F|T|
|T|F|F|T|F|F|
|F|T|T|F|T|T|
|F|T|T|F|T|T|
|F|F|T|T|T|T|

Also note that since $A \Longrightarrow B \equiv (\neg A) \vee B$

## If and only if (iff)
> Definition [iff]: The truth value "$A$ **if and only if** $B$, written as $A \Leftrightarrow B$ is true only if both $A$ and $B$ have the same truth value. As shown in the truth table:
>
> |$A$|$B$|$A \Leftrightarrow B$|
> |-|-|-|
> |T|T|T|
> |T|F|F|
> |F|T|F|
> |F|F|T|

**Equivalence to implication , AND**:
$$
(A \Leftrightarrow B) \equiv ((A \Longrightarrow B) \wedge (B \Longrightarrow A))
$$

**Logical equivalence for universally quantified statements:**
$$
(\forall x \in X, P(x) \Leftrightarrow Q(x)) \\
\equiv \\
((\forall x \in X, P(x) \Longrightarrow Q(x)) \wedge (\forall x \in X, Q(x)) \Longrightarrow P(x))
$$

# 3.0 Proving Mathematical statements
> Definition [proposition]: A mathemmatical claim posed in the form of a statement that needs to be proven true or false.

> Definition [theorem]: A significant proposition.

> Definition [lemma]: A subsidiary "hellper" proposition used to prove a theorem.

> Definition [corollary]: A proposition that follows from a theorem.

## Proving Universally Quantified Statements
### Direct Proof
> Proof Method [direct proof]: To prove the universally quantified statement $\forall x \in S, P(x)$, choose $x \in S$, then show that the open sentence $P$ is true for $x$, using properties about elements of $S$.

Let $x$ be any arbitrary element of $S$, and start using $x$ as a representative of any element of $S$. If $P(x)$ is proven for $x$, then it must hold true for any element of $S$ then.

### Examples
Prove $\forall x \in R, x^2+1\geq 2x$

**Proof**: Let $x$ be a real number. Then $x-1$ must also be a real number, hence $(x-1)^2\geq 0$. Expanding the terms on the left side, we obtain $x^2-2x+1\geq 0$. Adding $2x$ to both sides we get $x^2+1\geq 2x$.

### Counterxamples
> Proof method [counterexample]: To disprove the universally quantified statement $\forall x \in S, P(x)$, find an element $x \in S$ for which the open sentence $P(x)$ is false. This is called **finding a counterexample.**

## Proving Implications
> Proof method [proving implications]: To prove an implication:
>
> 1. Assume the hypothesis is true
> 2. Show conclusion is true


### Even and odd
> Definition [even, odd]: An integer is even if it is of the form $2k$ where $k \in \mathbb{Z}$, and odd if $2k+1$.

Example: Prove for all integers $a$, if $a$ is odd, then $3a^2+4a-1$ is even. 

Proof: Let $a$ be an arbitrary integer, and assume $a$ is odd is true. Then, $a=2k+1$ for some $k \in \mathbb{Z}$. To show that $3a^2+4a-1$, we need to find $l \in \mathbb{Z}$ s.t. $3a^2+4a-1 = 2l$. We thus obtain:
$$
3a^2+4a-1 = 3(2k+1)^2 + 4(2k+1)-1 \\
= 2(6k^2+10k+3)
$$
Let $l = 6k^2+10k+3$. Then we obtain $3a^2+4a-1 = 2l$.
Hence, $3a^2+4a-1$ is even.

## Divisibility of Integers
> Definition [divides, divisor, factor, multiple, divisible by]: An integer $m$ **divides** an integer $n$ (written as $m | n$) if there exists an integer $k$ so tat $n = km$. If $m | n$, then $m$ is a **divisor** or a **factor** of $n$, and that $n$ is a multiple of $m$ or that $n$ is **divisible** by $m$. If $m$ does not divide $n$, then $m \nmid n$. 

Examples: 
- 3 | 6 since $6 = 3*2$. There exists $k$ s.t. $6=3k$. 
- $5 \nmid 6$ since no integer $k$ exists s.t. $6 = 5k$.
- For all integers $a$, $a | 0$ since $0 = 0 * a$. It's true that $0 | 0$. 
- $1|b$ and $-1|b$ are all true.

## Transitivity of Integers
> Transitivity of integers: If $a|b$ and $b|c$, then $a|c$.  
> 

> Definition [divisibility of integer combinations (DIC)]: For all integers $a,b,c$, if $a|b$ and $a|c$, then for all integers $x,y$, $a|(bx+cy)$.
>  
> Note: The converse is true -  If $a|(bx+cy)$ then $a|b$ and $a|c$. 

Example: $(10 * 3) + (15 * 4) = 90$ is divisible by $5$. In fact, $10x + 15y$ is divisible by $5$. 

> Divisibility facts:
> 
> 1. if $a|b$ and $a|c$, then $a|(b+c)$
> 2. If $a|b$ then $a|bc$ for all integers $c$
> 3. If $a|b$ and $b|c$ then $a|c$.

**However:**
The statement: if $a|(b+c)$ then $a|b$ and $a|c$ is **false**.

If $d|ac$ and $d|bc$ then $d|c$ is a false statement .

If $ac|bc$ then $a|b$ is a false statement.

## Proof by contrapositive
> Proof method [contrapositive]: To prove $A \Longrightarrow B$, replace it with its contrapositive $(\neg B) \Longrightarrow (\neg A)$


Example:
Prove if $x^5 - 3x^4 + 2x^3 - x^2 + 4x - 1 \geq 0$, then $x \geq 0$. 

Let $x$ be an arbitrary real number. Then prove its contrapositive:
If $x < 0$, then $x^5 - 3x^4 + 2x^3 - x^2 + 4x - 1 < 0$.

Then assume $x < 0$. Then $x^5 < 0, 2x^3 < 0, 4x < 0$. We also know $-3x^4 < 0, $-x^2 < 0, and -1 < 0$. Therefore, the entire sum is less than 0.

**Use contrapositive when the conclusion appears simpler than the hypothesis**. 

**Use contrapositive when the conclusion is a disjunction** (**or** / $\vee$ ), since this is $A \Longrightarrow B \vee C$, then the contrapositive is $(\neg B) \wedge (\neg C) \Longrightarrow \neg A$. Which we obtain from applying De Morgan's Law on an equivalent form of the implication $A \vee \neg B$

**When the operations involved are too hard to deal with directly** ($a \neq b$ or $a \nmid b$)

# 3.6 Proof by Contradiction
> Definition [contradiction]: Let $A$ be a statement. Then either $A$ or $\neg A$ is false, so $A \wedge (\neg A)$ is always false. The statement "$A \wedge (\neg A)$ is true" is called a contradiction. 

## Example of proof by contradiction
Prove that $\sqrt{2}$ is irrational.

Proof approach: Express $\sqrt{2}$ as the ratio of two integers, then show that by contradiction, both of these integers must be even, which shows that $\sqrt{2}$ cannot be represented as the ratio of two integers. 

## Disproving implications by contradiction
Example: Prove for $a,b,c$, if $a | (b+c)$ and $a \nmid b$ then $a \nmid c$. 

Assume for the sake of contradiction that there exists integers $a,b,c$ such that $a|(b+c)$ and $a \nmid b$ and $a |c$. By DIC with $x=1$ and $y=-1$, we have
$$
a|(1 * (b+c) + -1c) \\
a|b
$$
Which is a contradiction to the initial assumptions $a\nmid b$. This is a contradiction, so the statement is true. 

**Contradiction and contrapositive are similar in logical structure.** 

## Proving Uniqueness
> Proof method [uniqueness]: 
> 
> Step 1 **(Existence)**: Prove that there is at least one element $x \in S$ such that $P(x)$ is true. That is, prove $\exists x \in S, P(x)$. 
> 
> Step 2 **(Uniqueness)**: Do either of the two:
>
> 1. Assume $P(x)$ and $P(y)$ are true for $x,y \in S$ and prove that this assumption leads to the conclusion $x=y$. 
> 2. Assume that $P(x)$ and $P(y)$ are true for $x,y \in S$ so $x\neq y$, and prove that this assumption leads to a contradiction.

# 3.7 Proving If and Only if Statements

> Proof method [if and only if]: To prove an iff statement:
> 
> 1. To prove $A \Leftrightarrow B$, it is equivalent to prove $A \Longrightarrow B$ and its converse $B \Rightarrow A$. 
> 2. To prove the universally quantified statement $\forall x \in S, P(x) \Leftrightarrow Q(x)$, then do either:
> 6
> a) Let $x$ be an arbitrary element of $S$, and prove $P(x) \Longrightarrow Q(x)$ and its converse $Q(x) \Longrightarrow P(x)$ 
> b) Prove the universally quantified implication $\forall x \in S, P(x) \Longrightarrow Q(x)$ and its universally quantified converse $\forall x \in S, Q(x) \Longrightarrow P(x)$ 

## Example of proving iff statements
Prove: For all integers $a,b,c$ we have $a|b|$ and $a|c$ if and only if for all integers $x,y$, $a|(bx+cy)$. 

To prove this statement, we need to prove the universally quantified implication and its converse. We previously proved both of these true, so the iff statement is true.

# 4.1 Notation for Summations, Products, Recurrences
## Notation for Summations
> Definition [Summation notation]:
> $$\sum_{i=m}^n x_i $$
>
> Represents the sum
> $$ x_m + x_{m+1} + x_{m+2} ... +x_{n-1} + x_n $$
> 
> Where $i$ is the **index of summation**, $m$ is the **lower bound of summation**, $n$ is the **upper bound of summation**. 

> Properties of summation:
> 
> Multiplying by a constant: 
> $$\sum_{i=m}^n c*x_i = c\sum_{i=m}^n x_i$$
> Adding and subtracting sums:
> $$\sum_{i=m}^n x_i + \sum_{i=m}^n y_i = \sum_{i=m}^n (x_i + y_i)$$
> $$\sum_{i=m}^n x_i - \sum_{i=m}^n y_i = \sum_{i=m}^n (x_i - y_i)$$
> Changing the bounds of the index of summation:
> $$\sum_{i=m}^n x_i = \sum_{i=m+k}^{n+k} x_{i-k}$$

Property 1 and 2 show that summation is **linear**. The last property allows us to change the bounds of index of summation, which is useful for combining summation expressions.

## Notation for Products
> Definition [Product notation]:
> $$\prod_{i=m}^n x_i $$
>
> Represents the sum
> $$ x_m * x_{m+1} * x_{m+2} ... * x_{n-1} * x_n $$
> 
> Where $i$ is the **index of summation**, $m$ is the **lower bound of summation**, $n$ is the **upper bound of summation**. 

## Notation for Recurrence Relations
A **recurrence relation** defines a sequence of values where each subsequent term depends on the value of the previous ones. 

Example: Fibonacci sequence is defined by $f_1 = 1, f_2 = 2, f_n = f_{n-1} + f_{n-2}$ for $n \geq 3$. 

# Proof by induction
## Induction
> Axiom [principle of mathematical induction (POMI)]: 
> Let $P(n)$ be a statement that depends on $n \in \mathbb{N}$
> s
> If the following statements are both true:
> 1. $P(1)$
> 2. For all $k \in \mathbb{N}$, if $P(k)$ then $P(k+1)$.
> Then the following must be true:
> 3. For all $n \in \mathbb{N}$, $P(n)$. 

The POMI lets us prove universally quantified statements in the following way:
> Proof method [induction]: 
> To prove the universally quantified statement "For all $n \in \mathbb{N}, P(n)$"
> 1. Prove $P(1)$
> 2. Prove the universally quantified implication "For all $k \in \mathbb{N}$ if $P(k)$ then $P(k+1)$. 

The implication $P(k) \Longrightarrow P(k+1)$ is called the inductive step. The hypothesis of the implication is called the *inductive hypothesis*, and the conclusion is the *inductive conclusion*. 

General format of an induction proof:
**Base case**: Prove $P(1)$
**Inductive step**: 
1. Assume $P(k)$ the inductive hypothesis. Write out the explicit statement of $P(k)$. 
2. Prove $P(k+1)$ using the assumption $P(k)$. Write out the explicit statement $P(k+1)$ before proving it.
3. After proving $P(k+1)$, end the proof by stating that the result is true for $n=k+1$ and hence holds for all $n \geq 1$ by the principle of mathematical induction. 


## Induction Example 1: Summation
Prove for every integer $n \in \mathbb{N}$,
$$
\sum_{i = 1}^n i^2 = \frac{n(n+1)(2n+1)}{6}
$$

The proof is by induction.

**Base case**: We have $P(1)$
$$
\sum_{i=1}^1 i^2 = \frac{1(1+1)(2*1+1)}{6}
$$

We know
$$
\sum_{i=1}^1 i^2 = 1^2 = 1
$$
and 
$$
\frac{1(1+1)(2*1+1)}{6} = \frac{6}{6} = 1
$$
So the base case $P(1)$ is true. 

**Inductive step**: Assume the inductive hypothesis $P(k)$, that is, assume
$$
\sum_{i=1}^k i^2 = \frac{k(k+1)(2k+1)}{6}
$$

We wish to prove $P(k+1)$ which is the statement:
$$
\sum_{i=1}^{k+1}i^2 = \frac{(k+1)((k+1)+1)(2(k+1)+1)}{6}
$$
Using summation properties and rearranging/factoring, we obtain:

$$
\sum_{i = 1}^{k+1}i^2 = \sum_{i=1}^k i^2 + ((k+1)^2) \\
= \frac{k(k+1)(2k+1)}{6} + ((k+1)^2)  \; \; \text{(from IH)} \\
= \frac{k(k+1)(2k+1) + 6(k+1)^2}{6} \\ 
= \frac{(k+1)(k+2)(2k+3)}{6} \\
= \frac{(k+1)((k+1)+1)(2(k+1)+1)}{6}
$$
The result is true for $n=k+1$ and thus holds for $n \geq 1$ by POMI. 

## Induction example 2: reasoning with inequalities
Prove for all integers $n \geq 3, n^2 > 2n + 1$. 

**Base case**: We have $P(3)$ is given by $3^2 > 2(3)+1$. We know $3^2 = 9$, $2(3)+1 = 7$, and $9 > 7$ which proves $P(3)$. 

**Inductive step**: Let $k$ be an integer such that $k \geq 3$. Assume the IH, that is, $k^2>2k+1$. We wish to prove $P(k+1)$, which is the statement
$$
(k+1)^2 > 2(k+1)+1
$$
Starting with the expression on the left hand side of $P(k+1)$, we have
$$
(k+1)^2 = k^2+2k+1 > (2k+1) + (2k+1) \geq 2k+1+7 > 2k+3 = 2(k+1)+1
$$
Where the first $>$ follows from the IH and the $\geq$ uses the fact that $2k+1 \geq 7$ since $k \geq 3$. 

The result is thus true for $n=k+1$ and hence holds for $n \geq 3$ by POMI. 

## Induction example 3: A recurrence relation that produces a square
Let $a_0 = 0$ and define for a non-negative integer $n$, $a_{n+1} = a_n + 2n + 1$. Then $a_n = n^2$ for every integer $n$. 
**Base case:** Note that $a_0 = 0$ by definition. $0 = 0^2$ so the base case holds.

**Inductive step**: Let $k \in \{0,1,2,...\}$. Assume that $a_k = k^2$. By definition, we know $a_{k+1} = a_k + 2k + 1$. From our inductive hypothesis, we know:
$$
a_k+2k+1 = k^2 + 2k + 1 \\
= (k+1)^2
$$
Therefore, $a_{k+1} = (k+1)^2$. Hence $P(n)$ holds for all $n \geq 0$ by the POMI. 

# Binomial Theorem

> Definition [factorial]:
> The **factorial** can be defined using product notation as such:
> 
> $$ m! = \prod_{i=1}^m i  $$
> We define $0! = 1$. 

> Definition [binomial coefficient]:
> We define the **binomial coefficient** for a non-negative integer $n$ and $m$ such that $m \leq n$ as 
> $${n \choose m} = \frac{n!}{(n-m)!m!} $$
If $m > n$, we define ${n \choose m} = 0$.

Examples:
1. ${n \choose 0} = \frac{n!}{n!0!} = 1$
2. ${n \choose 1} = \frac{n!}{(n-1)!1!} = n$
3. ${n \choose 2} = \frac{n!}{n-2)2!} = \frac{n(n-1)}{2}$ (notice that this is the sum of the first $n$ integers!!!)
4. ${7 \choose 3} = \frac{7!}{4!3!} = \frac{7*6*5}{3!} = 35$

## Pascal's identity
Pascal's identity is a recurrence that is used to prove the Binomial Theorem. 
> Proposition [Pascal's identity]:
> For positive integers $n$ and $m$ with $m < n$,
> $$ {n \choose m} = { n-1 \choose m - 1 } + {n - 1 \choose m}$$

Pascal's identity can be proved by using the identities and showing they are equivalent: 
$$
{n -1 \choose m} = \frac{(n-1)!}{(n-1-m)!m!} \\
{n - 1 \choose m - 1 } = \frac{(n-1)!}{(n-1-m)!m!} \\
{n \choose m } = \frac{n!}{(n-m)!m!}
$$

## Binomial Theorem I
> Theorem [Binomial Theorem I]:
> 
> For all integers $n \geq 0$ and all real numbers $x$,
> $$ (1+x)^n = \sum_{m=0}^n {n \choose m}x^m

Its proof is inductive.

## Binomial Theorem II
> Theorem [Binomial Theorem II]:
> 
> For all integers $n \geq 0$ and all real numbers $a$ and $b$,
> $$ (a+b)^n = \sum_{m=0}^n {n \choose m}a^{n-m}b^m

Its proof follows from factoring out $a$ and applying Binomial Theorem I on $a(1+\frac{a}{b})$.



# 4.4 Proof By Strong Induction
> Axiom [Principle of Strong induction (POSI)]:
> 
> Let $P(n)$ be a statement that depends on $n \in \mathbb N$
> If statements 1 and 2 of the below are both true:
>
> 1. $P(1)$
> 2. For all $k \in \mathbb N$, if $P(1) \wedge P(2) \wedge \dots \wedge P(k)$ then $P(k+1)$
>
> Then statement 3 is true:
> 
> 3. For all $n \in \mathbb N, P(n)$.

> Proof method:
> To prove a universally quantified statement "For all integers $n \geq b, P(n)$, 
> 
> 1. Prove $P(b) \wedge P(b+1) \wedge \dots \wedge P(B)$ for some $B \geq b$. 
> 2. Prove the universally quantified implication "For all integers $k \geq B$, if $P(b) \wedge P(b+1) \wedge \dots \wedge P(k)$ then $P(k+1)$. 

## Example - any number represented as a sum of powers of 2
Proposition: Every positive integer $n$ can be written as a sum of distinct non-negative integer powers of $2$. 

Base case: When $n=1$, we have $1 = 2^0$ which proves $P(1)$.

Inductive step: Let $k$ be an arbitrary natural number. Assume the inductive hypothesis $P(1) \wedge P(2) \wedge \dots P(k)$. 

We wish to prove $P(k+1)$, which is the statement "The positive integer $k+1$ is odd or even, and we prove the inductive conclusion separately for these two cases.

**Case 1**: Suppose $k+1$ is odd. Then by the inductive hypothesis, $k$ is the sum of non negative integer powers of $2$. Since $k$ is even, its sum cannot include $2^0$ since it is the only power of $2$ that is odd. By adding $2^0$ to this sum, we obtain $k+1$ is a sum of distinct integer powers of $2$, so $P(k+1)$ holds.

**Case 2**: Suppose $k+1$ is even. $(k+1)/2$ is an even integer and less than $k+1$, so by the inductive hypothesis, we have $(k+1)/2$ is the sum of distinct non-negative integer powers of $2$. If we multiply every term in the sum by $2$, then the poewrs are all increasd by $1$, so they remain distinct and positive. Now, the sum of these distinct integer powers of $2$ is twice the original sum, or $2*(k+1)/2 = k+1$ which proves $P(k+1)$ in this case.

The result holds for $n=k+1$, hence holds for $n \geq 1$ by POSI. 

# 5.0 Introduction to Sets
Let $\emptyset$ denote the **empty set**. Note that the set $\{\emptyset \}$ is **not** an empty set, but rather a set containing one element, the empty set.

The **cardinality** of a set refers to the size of the set, also denoted by $|S|$ for some set $S$. Examples:
1. $|\emptyset | = 0$
2. $|\{1,2,3\}| = 3$
3. $|\{\emptyset\}| = 1$
4. $|\{1,2, \{1,2\}\}| = 3$

The symbol $U$ denotes the **universe of discourse**, that is the set of all elements that are considered. 

# 5.1  Set Builder Notation

## Notation Type 1
> Set builder notation (Type 1):
> The notation 
> 
> $$ \{x \in U : P(x) \}$$
> 
> Describes the set consisting of all objects $x$ s.t.:
> 1. $x$ is an element of $U$, and 
> 2. $P(x)$ is true. 

## Example Notation Type 1
1. The set of all even integers $\{\dots, -4, -2, 0, 2, 4, \dots \}$ is described by:

$$ \{n \in \mathbb Z : 2|n\} $$

2. The closed interval $[a,b]$ for $a \leq b$ can be described by
$$\{x \in \mathbb R : a \leq x \leq b\}$$

3. $\{x \in \mathbb R : x^2 = 2\} = \{-\sqrt{2}, \sqrt{2}\}$, but $\{x \in \mathbb Z : x^2 = 2\} = \emptyset$.

## Notation Type 2
> Set builder notation, type 2:
> \
> The notation 
> $$\{f(x) : x \in U\}$$
> \
> describes the set consisting of all objects of the form $f(x)$ such that:
> 1. $x$ is an element of U

## Example Notation Type 2
1. The set of all even integers can be described as
   $$\{2k :k \in \mathbb Z \}$$
   Where $f(k) = 2k$.

2. The set $\{5, 25,125,\dots \}$ of all integer powers of 5 are given by 
   $$\{5^n : n \in \mathbb N\}$$
   Here we have $f(n) = 5^n$.

## Notation type 3
> Set builder notation type 3:
> The notations
> $$\{f(x) : x \in U, P(x) \}$$
> 
> or
> 
> $$\{f(x) : P(x), x \in U \}$$
> \
> both describe the set containing all objects of the form $f(x)$ such that:
> 1. $x$ is an element of $U$, and
> 2. $P(x)$ is true. 

## Example notation type 3
The set $\{5,25,125,... \}$ of all integers that are positive powers of 5 are given by:
$$\{5^k:k \in \mathbb Z, k > 0\}$$

The set of rational numbers $\mathbb Q$ can be written as:
$$ Q = \Big\{\frac{a}{b}: a \in \mathbb Z, b \in \mathbb Z, b\neq 0\Big\}$$

# Set operations
> Definition [union]:
> The union of sets $S$ and $T$, or $S \cup T$ is the set of all elements belonging to either set $S$ or set $T$ or both. It is written as
> $$S \cup T = \{x : x \in \mathbb S \vee T\}$$

> Definition [intersection]:
> The intersection of two sets $S$ and $T$, written as $S \cap T$ is the set of all elements that belong to both $S$ and $T$. This is written as
> $$ S \cap T = \{x : (x \in S) \wedge (x \in T)\}$$

> Definition [set difference]:
> The set difference of two sets $S$ and $T$, written $S-T$ or $S \backslash T$ is the set of all elements belonging to $S$ but not $T$. This is written as
> $$ S - T = \{x : (x \in S) \wedge (x \not\in T)\} = \{x : (x\in S) \wedge (\neg(x\in T))\}$$

> Definition [complement]:
> *Without mention of the universe $U$, the **complement** of a set $S$, written $\bar{S}$ is the set of all elements not in $S$. This is written as
> $$ \bar{S} = \{x : x \not\in S\}$$
> \
> *With explicit mention of the universe $U$*, the **complement** of a set $S$ whose elements belong to $U$ is written $\bar{S}$ and it is the set of all elements in $U$ but not in $S$. This is written as 
> $$ \bar{S} = \{x \in U: x \not\in S\}$$
> \
> Note that $\bar S = U - S$.

### Set operations identities
Let $S$ be an arbitrary subset of $U$. Then we have
1. $$S \cup \emptyset = S, S \cup U = U, S \cup S = S$$
2. $$S \cap \emptyset = \emptyset , S \cap U = S, S \cap S = S$$
3. $$S - \emptyset = S, \emptyset - S = \emptyset, S - S = \emptyset
4. $$\bar{U} = \emptyset, \bar{\emptyset} = U, S \cup \bar{S} = U, S \cap \bar{S} = \emptyset$$

# 5.4 Subsets of a set
These operations compare two sets $S$ and $T$. 
> Definition [disjoint]:
>  
> Two sets $S$ and $T$ are **disjoint** when $S \cap T = \emptyset$. That is, there are not common elements between $S$ and $T$. 
> \
> Note that $S \cap \emptyset = \emptyset \cap S = \emptyset$ for all choices of $S$, so the empty set $\emptyset$ is disjoint for all sets $S$. Also, we know $S \cap \bar{S} = \emptyset$ for all choices of $S$, so $S$ and its complement are disjoint for all sets $S$. 

> Definition [Subset, proper subset]:
> \
> A set $S$ is a **subset** of a set $T$ written as $S \subseteq T$ when every element of $S$ belongs to $T$. 
> \
> A set $S$ is called a **proper subset** of a set $T$ written as $S \subsetneq T$ when $S$ is a subset of $T$ and there exists and element of $T$ which does not belong to $S$. 

When $S$ is not a subset of $T$, we write $S \not\subseteq T$. When we have $S \subseteq T$, we can also say that $T$ is a **superset** of $S$, and when we have $S \subsetneq T$, we also ssay $T$ is a **proper superset** of $S$. 

## Examples of subsets
1. $\emptyset \subseteq S$ for all sets $S$. 
2. $S \subseteq S$ for all sets $S$, but $S$ is never a proper subset of $S$. 
3. $\{1,2,3\} \subseteq \{1,2,3,4\}$ and $\{1,2,3\} \subsetneq \{1,2,3,4\}$
4. $\{2,4,6\} \not\subseteq \{1,2,4,5\}$, and $\{2,4,6\} \not\subseteq \{3\}$. 
5. $\mathbb N \subseteq \mathbb Z, \mathbb Z \subseteq \mathbb Q, \mathbb Q \subseteq \mathbb R$. 

## Subset identity
Fact: For all integers $n\geq 1$ $S_n = \{1,2,3\dots n\}$ has $2^n$ subsets.

# 5.5 Subsets
Subsets can also be defined in terms of the universally quantified statement 
$$ \forall x \in U, (x \in S) \Longrightarrow (x \in T)$$

> Proof method [subsets]:
> 
> To prove that $S \subseteq T$, prove the universally quantified implication
> 
>
> $$\forall x \in U, (x \in S) \Longrightarrow (x \in T)$$
> 

## Proving Subset examples
Let $A = \{n \in \mathbb Z : 10 | n \}$ and $B=\{n \in \mathbb Z: 2 | n\}$
1. Prove that $A \subseteq B$. 
We prove the statement: 
$$\forall n \in \mathbb Z, (n \in A) \Rightarrow (n\in B)$$
Let $n$ be an arbitrary integer, and assume $n \in A$, so we have $n |10$. Hence there exists an integer $k$ such that $n=10k$. We thus have $n=2(5k)$ where $5k$ is an integer, so $2|n$, or $n\in B$.

2. Prove that $B \not\subseteq A$. 

We disprove the statement
$$ \forall n \in \mathbb Z, (x \in B) \Rightarrow (x \in A)$$
Using a counterexample. Suppose we let $n=2$. Now $2$ is divisible by $2$, but not divisible by 10. Therefore, for $n=2$, the hypothesis $n \in B$ is true but the conclusion $n \in A$ is false.

## Equal Sets
> Definition [equal sets]:
> \
> Two sets $S$ and $T$ are **equal**, written as $S = T$, when $S \subseteq T$ and $T \subseteq S$. 

> Proof method [equal sets]:
> \
> To prove the equality of two sets $S$ and $T$, we prove the universally quantified statements
> $$ (\forall x \in U, (x \in S) \Rightarrow (x \in T)) \wedge (\forall x \in U, (x \in T) \Rightarrow (x \in S))$$
> \
> Which is equivalently
> $$ \forall x \in U, (x \in S) \Leftrightarrow (x \in T)$$

# 6.1 Division Algorithm
## Divisibility and Bounds
> Proposition: For all real numbers $x$ we have $x \leq |x|$. 

> Proposition [Bounds by Divisibility (BBD)]: For all integers $a$ and $b$, if $b|a$ and $a \neq 0$ then $b \leq |a|$. 

Division formula:
$$a = qb + r, 0 \leq r < b$$
Where $a$ is an integer, $b$ is the divisor, $q$ is the quotient, and $r$ is the remainder.

> Proposition [Division Algorithm (DA)]: For all integers $a$ and positive integers $b$, there exist unique integers $q$ and $r$ such that
> $$ a = qb + r, 0 \leq r < b$$

# 6.2 Greatest Common Divisor
>Definition [common divisor]: Let $a$ and $b$ be integers. An integer $c$ is called a **common divisor** of $a$ ad $b$ if $c|a|$ and $c|b$. 

>Definition [greatest common divisor]: Let $a$ and $b$ be integers. 
> 1. If $a$ and $b$ are not both zero, an integer $d > 0$ is the **greatest common divisor** of $a$ and $b$, written as $d=gcd(a,b)$, when:
> - $d$ is a common divisor of $a$ and $b$, and
> - for all integers $c$, if $c$ is a common dvisor of $a$ and $b$, then $c \leq d$. 
> 2. If $a$ and $b$ are both zero, then we define $gcd(a,b) = gcd(0,0) = 0.$

In other words, the greatest common divisor of integers $a$ and $b$ that are both not zero, is the greatest integer that is both a divisor of $a$ and a divisor of $b$. 

## Properties of GCD
Let $a$ be an arbitrary integer. Then:
1. $gcd(a,a) = gcd(a,-1) = |a|$. 
2. $gcd(a,1) = gcd(a,-1) = 1$
3. $gcd(a,0) = |a|$. 

## GCD with Remainders
> Proposition [GCD with Remainders] (GCD WR): For all integers $a,b,q$ and $r$, if $a=qb+r$, then $gcd(a,b) = gcd(b,r)$.

TODO: Application of GCD with remainders video

## Euclidean Algorithm
Using GCD WR, we can calculate the GCD of two integers using the **Euclidean algorithm**:
Calculate $gcd(1386,322)$:

$$
1386=4*322+98 \\
322 = 3*98 + 28 \\
98 = 3*28+14\\
28=2*14+0
$$
So 
$$gcd(1386,322)=gcd(322,98) \\ = gcd(322,98)=gcd(98,28) \\ =gcd(98,28)=gcd(28,14)\\= gcd(28,14)=gcd(14,0)$$

# 6.3 Certificate of Correctness and Bezout's Lemma
## GCD Characterization Theorem
> Theorem [GCD Characterization Theorem (GCD CT)]: For all integers $a$, and $b$, and non-negative integer $d$, if:
> 1. $d$ is a common divisor of $a$ and $b$, and
> 2. there exist integers $s$ and $t$ such that $as+bt=d$
> 
> Then $d=gcd(a,b)$.

For example, to prove $gcd(1386,322)=14$, we can find $1386s+322t=14$ for some integers $s,t$. In this case, $s=10,t=-43$. 

In this sense, $s$ and $t$ provide a *certificate of completeness* for $d$ the gcd of $a$ and $b$. 

## Bezout's Lemma aka Bezout's Identity
The converse of GCD CT is also true:
> Lemma [Bezout's Lemma (BL)]: For all integers $a$ and $b$, there exist integers $s$ and $t$ such that $as+bt=d$, where $d=gcd(a,b)$. 


# 6.4 Extended Euclidean Algorithm
This is the general formula for the extended Euclidean algorithm to find integers $s$ and $t$ that are the certificate of correctness along with $d=gcd(a,b)$:

Construct a table with the first two rows as such. The subsequent rows will then look like:
|x|y|r|q|
|-|-|-|-|
|1|0|a|0|
|0|1|b|0|
|1-(0)*q|0-1*q|a-b*q|$\lfloor\frac{a}{b}\rfloor$|
|...|...|...|...|
|~|~|gcd(a,b)|~|
|~|~|0|~|



That is, the general formula for each iteration row is:
$$
Row_i = Row_{i-2} - q_iRow_{i-1}
$$
**Repeat until $r$ is 0**.

**The second last row will then contain $gcd(a,b)$ in the $r$ column and $x$ and $y$ contain the values of $s$ and $t$ that are the certificate of correctness.**

Example: Use EEA to compute $gcd(1386,322)$.

|x|y|r|q|
|-|-|-|-|
|1|0|1386|0|
|0|1|322|0|
|1|-4|98|4|
|-3|13|28|3|
|10|-43|14|3|
|-23|99|0|2|

So $gcd(1386,322) = 14, s=10,t=-43$. 

# More properties of GCD
## Common Divisors
> Proposition[Common Divisor Divides GCD (CDD GCD)]: For all integers $a,b, c$, if $c|a$ and $c|b$, then $c|gcd(a,b)$

Example: Prove for all integers $a,b$, and non-negative integers $c$, we have $gcd(ca,cb)=cgcd(a,b)$.

Let $a,b$ be arbitrary integers and let $c$ be an arbitrary non-negative integer. 

Let $d=gcd(a,b)$. We know $d|a$ and $d|b$, and so there exist integers $k$ and $m$ such that $a=kd$ and $b=md$. Multiplying these equations by $c$, we have $ca=ckd=(cd)k$ and $cb=cmd=(cd)m$. 

So $cd|ca$ and $cd|cb$.

By BL, there exist integers $s$ and $t$ such that $as+bt=d$. Multiplying equation by $c$ gives
$$(ca)s+(cb)t=cd$$

Now we have $d \geq 0$ and $c \geq 0$ by hypothesis, which gives $cd \geq 0$. We conclude from GCD Characterization Theorem that $gcd(ca,cb) = cd$. 


## Coprime integers
> Definition [coprime]: Two integers $a,b$ are coprime if $gcd(a,b)=1$. 

Examples:
- 5 and 7 are coprime
- 11 and 17 are coprime
- 18 and 35 are coprime but not prime

**All primes are coprime with each other. Composite numbers can be coprime**. 

> Theorem [Coprimeness Characterization Theorem (CCT)]: For all integers $a$ and $b$, $gcd(a,b) = 1$ if and only if there exist integers $s$ and $t$ such that $as+bt=1$. 

To check if two integers are coprime, use the gcd algorithm or extended gcd algorithm to find if their gcd = 1. 

## Coprimeness proofs (TODO)

## Division by GCD
> Proposition [Division by GCD (DB GCD)]: For all integers $a$ and $b$, not both zero, $gcd(\dfrac{a}{d}, \dfrac{b}{d}) = 1$, where $d=gcd(a,b)$


> Proposition [Coprimeness and Divisibility (CAD)]: For all integers $a,b,c$ if $c|ab$ and $gcd(a,c) = 1$, then $c|b$. 

# Prime Numbers
> Definition [prime, composite]: A naturla number $p>1$ is prime if its only positive divisors are 1 and $p$ itself. Otherwise, $p$ is composite.

> Proposition [Prime factorization (PF)]: Every natural number $n>1$ can be written as a product of primes.

> Theorem [Euclid's Theorem (ET)]: The number of primes is Infinite.

Application of Euclid's Theorem: Primes $a,b,c,d$, ... are all coprime to $a*b*c*d+1$

An integer coprime to $3,5,13$ is $3*5*13+13=196$. 

# 6.7 Unique Factorization Theorem
## Euclid's Lemma
> Lemma [Euclid's Lemma (EL)]
> For all integers $a$ and $b$, and prime numbers $p$, if $p |ab$ then $p |a$ or $p|b$. 

## Unique Factorization Theorem
> Unique Factorization Theorem [UFT]: Every natural number $n>1$ can be written as a product of prime factors uniquely, apart from the order of factors.

## Finding A Prime Factor
> Proposition [Finding a prime factor (FPF)]:
> Every natural number $n>1$ is either prime or has a prime factor less than or equal to $\sqrt{n}$. 

# Prime factorizations and GCD
> Proposition [GCD From Prime Factorization (GCD PF)]: Let $a$ and $b$ be positive integers, let 
> $$a = p_1^{\alpha_1}p_2^{\alpha_2}\dots p_k^{\alpha_k} \qquad b = p_1^{\beta_1}p_2^{\beta_2}\dots p_k^{\beta_k}$$
> Which are their unique prime factorizations. Then we know 
> $$gcd(a,b) = p_1^{min(\alpha_1, \beta_1)}p_2^{min(\alpha_2, \beta_2)}\dots p_k^{min(\alpha_i, \beta_i)}$$

# Linear diophantine equations
> Definition [Diophantine equations]: An equation inwhich the coefficients and variables are integers. 

> Theorem [Linear diophantine equation theorem Pt. 1]: For all integers $a$, $b$, and $c$, wiht $a$ and $b$ nonzero, the linear diophantine equation
> $$ax +by = c$$ 
> has an integer solution if and only if $d|c$ where $d = gcd(a,b)$. 

Example: Which of the following linar diophantine equations have a solution?
1. $33x+18y=23$
2. $33x+18y=24$

Solution: We know $gcd(33,18)= 3$. $3\nmid 23$ so 1) does not have integer solutions. But $3\mid 24$ so 2) has integer solutions.

## Finding solutions to Diophantine equations
To find a solution to $ax+by=c$ when $d|c$, where $d=gcd(a,b)$:
1. Use EEA to find integers $s$ and $t$ such that 
$$as+bt = d$$
2. Multiply this equation by $k=\dfrac{c}{d}$ So we get 
$$a(ks)+b(kt)=kd=c$$
This gives the solution $x=ks$ and $y=kt$. 

# 7.2 Finding All Solutions to A Diophantine Equation in Two Variables
> Theorem [Linear Diophantine Equation Theorem Pt. 2]:
> Let $a,b$ and $c$ be integers with $a$ and $b$ nonzero, and $d = gcd(a,b)$. If $x = x_0$ and $y=y_0$ is one particular integer solution to the linear diophantine equation $ax+by=c$, then the set of all solutions is given by
> $$\{(x,y):x=x_0+\dfrac{b}{d}n,y=y_0 -\dfrac{a}{d}n, n\in \mathbb Z\}$$

# 8.1 Congruence
Motivation: develop an arithmetic for divisibility

> Definition [congruent, congruence, modulo, modulus]: Let $m$ be a fixed integer. For integers $a$ and $b$, we say $a$ is **congruent** to $b$ **modulo** $m$ and write
> $$a \equiv b \pmod m$$
> When $m\mid (a-b)$. For integers $a$ and $b$ such that $m\nmid(a-b)$, we write $a \not\equiv b \pmod m$. We refer to $\equiv$ as **congruence** and $m$ as its **modulus**. 

Example question: What $x$ for $0 \leq x \leq 11$ satisfies $x \equiv -24 \pmod {12}$?

We have $x = 0$ Since We are solving $(x+24)=12c$ and $0$ is the only possible value. 

# 8.2 Elementary Properties of Congruence

> Proposition [Congruence is an Equivalence Relation (CER)]: For all integers $a, b, c$ we have:
1. $a \equiv a \pmod m$
2. If $a \equiv b \pmod m$ then $b \equiv a \pmod m$
3. If $a \equiv b \pmod m$ and $b \equiv c \pmod m$ then $a \equiv c \pmod m$. 


> Proposition [Addition Subtraction Multiplication of Congruences]:
> For all integers $a_1,a_2,b_1$ and $b_2$, if $a_1 \equiv b_1 \pmod m$ and $a_2 \equiv b_2 \pmod m$ then:
> 1. $a_1 + a_2 \equiv b_1 + b_2 \pmod m$
> 2. $a_1 - a_2 \equiv b_1 - b_2 \pmod m$
> 3. $a_1a_2 \equiv b_1b_2 \pmod m$


## Further Properties of Congruence
**Subtraction also applies here because it is just addition of negative numbers.**
> Proposition [Congruence Add and Multiply (CAM)]: For all positive integers $n$, for all $1 \leq i \leq$ then
> 1. $a_1+a_2 + \cdots + a_n \equiv b_1+b_2+\cdots b_n \pmod n$
> $a_1a_2\cdots a_n \equiv b_1b_2\cdots b_n \pmod m$

> Proposition [Congruence Power (CP)]: For all positive integers $n$ and integers $a$ and $b$, if $a \equiv b \pmod m$ then $a^n \equiv b^n \pmod m$. 

Note: CP is just an application of CAM with $a_i = a$ and $b_i = b$. 

> Proposition [Congruence Divide (CD)]: For all integers $a,b,$ and $c$, if $ac \equiv bc \pmod m$ and $gcd(c,m) = 1$, then $a \equiv b \pmod m$. 

# 8.3 Congruence and Remainders
> Proposition [Congruent Iff Same Remainder (CISR)]: For all integers $a$ and $b$, $a \equiv b \pmod m$ if and only if $a$ and $b$ have the same remainder when divided by $m$. 

> Proposition [Congruent To Remainder (CTR)]: For all integers $a$ and $b$ with $0 \leq b < m$, we have $a \equiv b \pmod m$ iff $a$ has a remainder $b$ when divided by $m$. 

## Examples
Determine remainder of $3^{47}$ divided by $7$.
Solution: Notice that $3^3\equiv 27 \equiv -1 \pmod 7$
$$
\begin{aligned}
3^{47} \equiv 3^{2+45} \pmod 7 \\
\equiv 3^23^{45}\pmod 7 \\
\equiv 9(3^3)^{15} \pmod 7 \\
\equiv 2(-1)^{15} \pmod 7 \\
\equiv 2(-1) \pmod 7 \\
\equiv -2 \pmod 7 \\
\equiv 5 \pmod 7
\end{aligned}
$$

## Square and Multiply Algorithm
Let $a,n,m$ be positive integers. The square and multiply algorithm is used to compute remainder of an integer $a^n$ when divided by $m$. 

Example: Compute the last two digits of $211^{90}$. 



## Divisibility Tests
> Divisibility Rule for 3: A number is divisible by 3 if the sum of the digits in the decimal representation of a is 3. 

> Divsibility rule for 11: An integer $a$ is divisible by $11$ iff $S_e - S_0$ is divisible by $11$ where:
> 1. $S_e$ is the sum of the digits of odd powers of 10 of the decimal representation of $a$.
> 2. $S_o$ is the sum of digits of odd powers of 10 in the decimal representation of a.

Example: For $6455874532635$ we have:
$S_e - S_0 = (6 + 5 + 8 + 4 + 3 + 6 + 5) - (4 + 5 + 7 + 5 + 2 + 3) = 37 - 26 = 11$
Which means it is divisible by 11. 

# 8.4 Linear Congruences
> Theorem [Linear Congruence Theorem (LCT)]: For all integers $a$ and $c$ with $a$ non-zero, the linear congruence
> $$ax \equiv c \pmod m$$
> has a solution iff $d\mid c$ where $d=gcd(a,m)$. If $x=x_0$ is a solution to the congruence, then the set of all solutions is given by
> $$\{x \in \mathbb Z : x \equiv x_0 \pmod \frac{m}{d} \}$$
> or equivalently
> $$\{x \in \mathbb Z : x \equiv x_0, x_0 + \frac{m}{d}, x_0 + 2\frac{m}{d} \cdots , x_0 + (d-1) \frac{m}{d} \pmod m\}$$

## 8.5 Non-Linear Congruences
There's no simple way to solve a non-linear congruence, but we can check all the values of $m$:

Example: Solve $x^2+x \equiv 2 \pmod 8$
|val||/|/|/|/|/|/|/|
|-|-|-|-|-|-|-|-|-|
|$x \pmod 8$|0|1|2|3|4|5|6|7|
|$x^2 \pmod 8$|0|1|4|1|0|1|4|1|
|$x^2+x \pmod 8$|0|2|6|4|4|6|2|0|

# 8.6 Congruence Classes and Modular Arithmetic
## Congruence Classes and Modular Arithmetic
> Definition [congruence class]: The congruence class modulo $m$ of the integer $a$ is the set of integers
> $$[a] = \{x \in \mathbb Z : x \equiv a \pmod{m}\}$$

For $z_4$ there are four congruence classes
$$
[0] = \{4k: k \in \mathbb Z\} \\
[1] = \{4k+1 : k \in \mathbb Z\} \\
[2] = \{4k+2 : k \in \mathbb Z\} \\
[3] = \{4k+3 : k \in \mathbb Z\} \\
$$

## Arithmetic of Congruence Classes
> Definition [Modular arithmetic]: Define $Z_m$ to be the set $m$ of congruence classes
> $$Z_m = \{[0],[1],[2], ..., [m-1]\}$$
> Define two operations on $Z_m$ addition and multiplication as follows:
> $$[a] + [b] = [a + b] \\
> [a][b] = [ab]$$

## Properties of Modular Arithmetic
1. $[a] + [0] = [0] +[a] = [a]$
2. $[a][0] = [0][a] = [0]$
3. $[a] + [-a] = [-a]+[a] = [0]$
4. $[a][1] = [1][a] = [a]$

From 1: $[0]$ is the additive identity in $Z_m$. 

From 3: $[-a]$ is the additive inverse of $[a]$. 

From 4: $[1]$ is the multiplicative identity in $Z_m$. 
### Multiplicative inverse
Not every element has a multiplicative inverse. In $Z_4$ , $[2]$ and $[0]$ has no multiplicative inverse. 

To look for a multiplicative inverse of $[a]$ we solve the equation $[a][x]=1$, which is specified below:

> Theorem [Modular Arithmetic Theorem (MAT)]: For all integers $a$ and $c$, with $a$ non-zero, the equation
> $$[a][x]=[c]$$
> in $Z_m$ has a solution iff $d \mid c$ where $d = gcd(a,m)$. Moreover, when $d \mid c$, there are $d$ solutions given by
> $$[x_0], [x_0 + \frac{m}{d}], [x_0+2\frac{m}{d}], \dots , [x_0 + (d-1)\frac{m}{d}]$$
> Where $[x]=[x_0]$ is a particular solution.

Finding inverses:
> [Inverses in $Z_m$]:
> 
> Let $a$ be an integer with $1 \leq a \leq m-1$. Then the element in $[a]$ in $Z_m$ has a multiplicative inverse if and only if $gcd(a,m) = 1$. Moreover, when $gcd(a,m) = 1$, the multiplicative inverse is unique. There are $gcd(a,m)$ solutions.


Inverses in primes:
> [Inverses in $Z_p$]: For all prime numbers $p$ and non-zero elements $[a]$ in $Z_p$, the multiplicative inverse $[a]^{-1}$ exists and is unique.

## Examples
1. Does $[5]$ have a multiplicative inverse in $Z_{10}$? **No**, because $gcd(5,10) = 5 \neq 1$.

2. Solve $[5][x] = [4]$ in $Z_{12}$. 

Solution: Since $gcd(5,12) = 1$, the multiplicative inverse $[5]^{-1}$ exists and is unique. By observation, we find $[5][5] = [25] = [1]$ in $Z_{12}$. Hence we have $[5]^{-1} = [5]$. 

Multiplying both sides of $[5][x] = [4]$ by $[5]^{-1}$ we get
$$[x] = [5]^{-1}[4] = [20] = [8]$$
Therefore, $[5][x] = [4]$ has one solution $[x] = [8]$ in $Z_{12}$. 


# 8.7 Fermat's Little Theorem
> Theorem [Fermat's Little Theorem F$l$t]: For all prime numbers $p$ and integers $a$ not divisible by $p$, we have
> $$a^{p-1} \equiv 1 \pmod{p}$$

> Corollary: For all prime numbers $p$ and integers $a$, we have
> $$a^p \equiv a \pmod{p}$$

When applying FLT, it is important to consider the two cases $x \equiv 0 \pmod{p}$ and $x \neq 0 \pmod{p}$. 

# Chinese Remainder Theorem
> Theorem [Chinese Remainder Theorem (CRT)]: For all integers $a_1$ and $a_2$ and positive integers $m_1$ and $m_2$, if $gcd(m_1,m_2)=1$ then the simulataneous linear congruences
> $$n\equiv a_1 \pmod{m_1}$$
> $$n \equiv a_2 \pmod{m_2}$$
> have a uniue solution modulo $m_1m_2$. Thus, if $n=n_0$ is one particular solution then the solutions are given by the set of all integers $n$ such that
> $$n \equiv n_0 \pmod{m_1m_2}$$


# Splitting a Modulus
> Theorem [Splitting a Modulus Theorem (SMT)]: For all integers $a$ and positive integers $m_1$ and $m_2$, if $gcd(m_1,m_2) = 1$, then the simulatneous congruences
> $$ n \equiv a \pmod{m_2} \\
> n \equiv a \pmod{m_2}$$
> have exactly the same solutions as the single congruence $n \equiv a \pmod{m_1m_2}$.

# RSA
Notation: 

**Public key**: (e, n)

**Private key**: (d, n)
## Setting up RSA
1. Choose two large, distinct primes $p$ and $q$, let $n = pq$. 
2. Choose $e$ such that $gcd(e, (p-1)(q-1)) = 1$ and $1 < e < (p-1)(q-1)$
3. Solve the congruence $ed \equiv 1 \pmod{(p-1)(q-1)}$ for an integer $d$ such that $1 < d < (p-1)(q-1)$
4. The public key is then $(e,n)$
5. The private key is $(d,n)$ and the primes $p$ and $q$ are secret.

## RSA Encryption
1. Get the public key $(e,n)$.
2. Construct the message $M$ such that $0 \leq M < n$.
3. Encrypt $M$ as the ciphertext $C$ given by $C \equiv M^e \pmod{n}$ where $0 \leq C < n$. 
4. Send C as the encrypted message
## RSA Decyrption
1. Use the private key $(d,n)$ to decrypt the ciphertext C as the message R by $R \equiv C^d \pmod{n}$ where $0 \leq R < n$
2. Claim: $R = M$


# Standard Form Complex Numbers
> Definition [Complex number]: A complex number in standard form is an expression of the form $z = x + yi$ where $x, y \in \mathbb R$. The real number $x$ is called the real part of $z$ as $Re(z)$ and the real number $y$ is the imaginary part of $z$, writen as $Im(z)$. The set of all complex numbers is given by 
> $$\mathbb C = \{x + yi: x,y \in \mathbb R\}$$
> Complex numbers $z = x + yi$ and $w = u = vi$ are equal iff $x = u$ and $y = v$. 

## Complex Arithemtic
> Addition and Subtraction of Complex Numbers
> Let $z = a+bi$ and $w = c+ di$ be complex numbers.
> Addition is defined by
> $$z+w = (a+c)+(b+d)i$$
> Multiplication is defined by
> $$zw = (ac - bd) + (ad + bc)i$$


## Properties of Complex Numbers
Arithmetic works as usual in $\mathbb C$.

However, the multiplicative inverse is special.
> Proposition [10.1.1] (Multiplicative inverse in $\mathbb C$): For all complex numbers $z$, the multiplicative inverse of $z$ exists if and only if $z \neq 0$. Moreover, for $z = a + bi \neq 0$ the multiplicative inverse is unique and is given by
> $$z^{-1} = \dfrac{a}{a^2+b^2} - \dfrac{b}{a^2+b^2}i = \dfrac{a-bi}{a^2+b^2}$$

## Properties of Complex Arithmetic
Except for the multiplicative inverse, the **Properties of Complex Arithmetic (PCA)** shows that associativity, commutativity, additive and multiplicative identities, all are like with real numbers.


## Binomial Theorem for complex numbers
The binomial theorem holds for all complex numbers $a$ and $b$:
> $$(a+b)^n = \sum_{m=0}^n {n \choose m}a^{n-m}b^m$$

# Conjugate and Modulus
> Definition [Conjugate]: The complex conjugate of a complex number $z = x + yi$ is written as $\overline{z}$, is the complex number
> $$\overline{z}: x - yi$$

> Definition [Modulus]: The modulus of a complex number $z = x + yi$ is written as $|z|$ is the non-negative real number
> $$|z| = \sqrt{x^2 + y^2}$$

## Properties of the Conjugate (PCJ)
For the complex conjugate, the following properties hold for all $z, w \in \mathbb C$. 
$$
\begin{aligned}
\overline{(\overline{z})} = z \\
\overline{z+w} = \overline{z}+\overline{w} \\
z + \overline{z} = 2Re(z) \\
z - \overline{z} = 2Im(z)i \\
\overline{zw} = \overline{z} \overline{w} \\
\text{If } z \neq 0 \text{ then } \overline{(z^{-1})} = (\overline{z})^{-1}
\end{aligned}
$$

## Properties of the Modulus (PM)
For the modulus, the following properties hold for all $z,w \in \mathbb C$:
1. $|z| = 0$ iff $z = 0$
2. $|\overline{z}| = |z|$
3. $\overline{z}{z} = |z|^2$
4. $|zw| = |z||w|$
5. If $z \neq 0$ then $|z^{-1}| = |z|^{-1}$


## More Properties
> Triangle Inequality (TIQ) For all $z, w \in \mathbb C$ we have $|z+w| \leq |z| + |w|$.


# Complex Plane and Polar Form
> Definition [Complex / Argand plane]: The complex number $z = x + yi$ can be represented by the point $(x,y)$ with the x axis representing real and y axis representing imaginary. 

## Polar Form
> Definition [Polar form / argument]: The polar form of a complex number $z$ is 
> $$z = r(cos\theta + isin\theta)$$
> where $r \geq 0$ is the modulus of $z$. The angle $\theta \in \mathbb R$ is called the argument of $z$. 


## Polar Multiplication
> Polar Multiplication in $\mathbb C$ (PM$\mathbb C$) 
> For all complex numbers $z_1 = r_1(cos\theta_1+isin\theta_1)$ and $z_2 = r_2(cos\theta_2 + i sin\theta_2)$ we have
> $$z_1z_2 = r_1r_2(cos(\theta_1+\theta_2) +isin(\theta_1 + \theta_2))$$

# De Moivre's Theorem
> Theorem [De Moivre's Theorem (DMT)] For all real numbers $\theta$ and integers $n$, we have
> $$(cos\theta + isin\theta)^n = cos(n\theta) + isin(n\theta)$$

> Corollary to De Moivre's Theorem: For all complex numbers $z = r(cos\theta + isin\theta)$ and integers $n$ except when $|z| = r = 0$, and $n$ is negative, we have
> $$z^n = r^n(cosn\theta + isinn\theta)$$

# Complex n-th roots
> Definition [Complex root]:
> For a complex number $a$ and a positive integer $n$, the complex numbers $z$ that satisfy the equation
> $$z^n = a$$
> are called the complex n-th roots of $a$.

> Theorem [Complex n-th roots theorem (CNRT)]: For all complex numbers $a = r(cos\theta + isin\theta)$ and natural numbers $n$, the compex $n$th roots of $a$ are given by
> $$\sqrt[n]{r}\Bigg(cos\big(\dfrac{\theta+2k\pi}{n}\big) + isin\big(\dfrac{\theta+2k\pi}{n}\big) \Bigg) \qquad k = 0,1,2,3 \cdots, n-1$$


# Square Roots and the Quadratic Formula

> Proposition [Quadratic Formula]: For all complex numbers $a,b,$ and $c$ with $a \neq 0$, the solutions to $az^2 + bz + c = 0$ are given by
> $$z = \dfrac{-b\pm w^2}{2a}$$
> Where $w$ is a solution to $w^2 = b^2 - 4ac$. 

Example: Express the solutions to $2z^2 + 3z + 2 = 0$ in standard form. 
Solution: Using the quadratic formula, we have
$$z = \dfrac{-3 \pm w}{4} \qquad \text{where $w^2 = 9 - 4(4) = -7$}$$
One solution to $w^2 = -7$ is a $w = \sqrt{7}i$ so the two solutions are
$$\dfrac{-3}{4} \pm \dfrac{\sqrt{7}}{4}i$$

