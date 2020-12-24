---
title: "MATH 137 Notes"
date: "2020-09-09"
type: "note"
tags: "math137, calculus"
---

# Week 1: Absolute Value and the Triangle Inequality (Tues 8 Sep 2020)
> Definition [Absolute Value]: The absolute value of a real number $x$ is the quantity  
> $$ |x| = \begin{cases} x \hspace7ex \text{if} \space x \geq 0
    & \\
    -x \hspace7ex \text{if} \space x < 0 
    \end{cases} $$ 

## Properties of $|x|$
- $|x| \geq 0$ for all real numbers
- $|x| = |-x|$ for all real numbers

## Geometric interpretation of $|x|$
**Remark** $|x| = \sqrt{x}$

The absolute value is the one-dimensional analogue to the distance function $\sqrt{x^2 + y^2}$. 

On a 1D number line, $|x|$ measures the distance from one number to zero, and $|x-d|$ measures the distance of a number $x$ from $d$. 


## Triangle Inequality
> Theorem [Triangle Inequality]:
> 
> For any $x,y,z \in \mathbb{R}$:
> $$ |x-y| \leq |x - z| + |z - y|

![Triangle Inequality](./images/triangleinequality.png)


### Proof of Triangle Inequality
There are three cases to consider: 

**Case 1:** $z < x$
![Triangle Inequality](./images/triangleinequalityc1.png)

$$
 |x - y| \leq | z - y | \leq |x-z| + |z-y|
$$

**Case 2**: $x \leq z \leq y$
![Triangle Inequality](./images/triangleinequalityc2.png)

$$
|x-y| = |x-z| + |z-y|
$$

**Case 3**: $z > y$
![Triangle Inequality](./images/triangleinequalityc3.png)

$$
|x-y| < |x-z| \leq |x-z| + |z-y|
$$

## Variants of Triangle Inequality

The inequality is $\leq|$ because $|z-y|$ can be zero.

> Theorem [Triangle Inequality 2]: For $x, y \in \mathbb{R}$:
> 
> $$ |x + y | \leq |x| + |y| $$

**Proof:** Apply the triangle inequality with $x, -y, z=0$. 

**Other variants of the triangle inequality**:
$$
|a| - |b| \leq |a - b| \\
|a - b| \leq |a| + |b| \\
\text{Therefore }
|a|-|b| \leq |a - b| \leq |a|+|b|
$$


## Solving Absolute Value Problems
**Problem:** Find all $x \in \mathbb{R}$ such that $|x -3| < 2$.

### Approach 1: Algebraic Solution
Recognize that:

$$
|x-3| < 2 \\ \leftrightarrow \\ -2 < x-3 < 2 \\ \leftrightarrow \\ -2+3< x < 2 +3 
$$
This is becauase we know that $|x-3| < 2$ is $-(x-3)$ when $x-3 < 0$ and $(x-3)$ when $x-3 > 0$. 
### Approach 2: Geometric Solution
Interpret the problem as **"distance from $x$ to $3$ is less than $2$"**. Drawing this out, we can see that the solution set is $x \in (1,5)$.

![Triangle Inequality](./images/triangleinequality_geometric.png)

## Important Inequalities
Let $\delta > 0$:


1. $|x-a| \leq \delta$ iff $x \in [a-\delta,a+\delta]$

![Triangle Inequality](./images/important-inequality1.png)

2. $|x-a| < \delta$ iff $x \in (a-\delta, a + \delta)$

![Triangle Inequality](./images/important-inequality2.png)

3. $0 < |x - a| < \delta$ iff $x \in (a-\delta, a+\delta)$ \ $\{a\}$

![Triangle Inequality](./images/important-inequality3.png)

## Difficult concepts
1. If $0 < x^2 < 2$ then $0 < x < \sqrt{2}$
    
    FALSE because if $x^2 < 2$, then $x < \pm \sqrt{2}$
    This means $x$ can be in the interval $-\sqrt{2} < x < 0$ or $0 < x < \sqrt{2}$. 

2. If $a < b$ then $\frac{1}{a} > \frac{1}{b}$ is FALSE but true if $0 < a < b$.
## Reverse triangle inequality


# Week 2: Sequences  (Sat 12 Sep 2020)
## Introduction to Sequences
> Definition [Sequence]: An *infinite* ordered list of real numbers.
> 
> A function $f : \mathbb{N} \rightarrow \mathbb{R}$
. For $n \in \mathbb{N}$, $f(n)$ is the $n$th term and $n$ is the index.

The order in a sequence is important.

### Specifying a sequence
#### Explicit functions
$$ 
f(n) = \frac{1}{n} \\ \\
a_n = \frac{1}{n} \\ \\ 
\{1, \frac{1}{2}, \frac{1}{3} \cdots, \frac{1}{n} \} \\ \\  \\ 
\{\dfrac{1}{n}\}^{\infty}_{n=1} \;  \text{or} \;  \{\dfrac{1}{n}\}
$$
Note that round brackets are sometimes used in place of curly braces to emphasize that the elements are ordered (as in ordered pairs) and not elements of a set (unordered).  
#### Recursion
A recursive sequence is a sequence in which future terms are defined from existing terms.

$$
\text{Let} \; a_1 = 1 \; \text{and} \; a_{n+1} = \dfrac{1}{1+a_n}
$$
To calculate $a_5$, we must calculate $a_1$ to calculate $a_2$ ... $a_4$ to find $a_5$.

### Graphically representing Sequences
#### 2D plot
![2d sequence](images/2dsequenceplot.png)

**Advantages**:
- Shows that as $n$ increases, $f(n)$ decreases
- Shows that as $n$ increases, $f(n) \rightarrow 0$

#### 1D plot
![1d sequence](images/1dsequenceplot.png)

**Advantages**:
- Shows the possible values that $f(n)$ can take on

**Disadvantages**:
- Does not show the sequence is decreasing as $n$ increases (information loss)

#### Contrast
![1d_vs_2d](images/1d2dsequencecontrast.png)
- 2D plot shows that $f(n)$ oscillates, but 1D plot does not show this.
- 1D plot shows that the range of $f(n)$  is strictly $\{1, -1\}$.

## Subsequences and Tails of Sequences
### Subsequences
> Definition [Subsequence]
>
> Given a sequence $\{a_n\}$ and sequence $\{n_k\}$ such that
>
>$$n_1 < n_2 < n_3 < n_k \cdots$$
> 
> define
> 
>$$b_{k} = a_{n_{k}}$$
>
> The sequence $\{b_k\} = \{a_{n_1}, a_{n_2}, a_{n_3}, \cdots a_{n_k}$ is called a subsequence of $\{a_n\}$

Example: $\text{Let} \;  a_n = \frac{1}{n} \; and \; n_k = 2k$. Then we can substitute $2k$ in:
$$ b_k = a_{n_k} = a_{2k} = \frac{1}{2k}$$

### Tails of sequences (pt 1)
Given a sequence $\{a_n \}$ and $j \in \mathbb{N} \cup \{0\}$, let
$$
\{b_{k}\} = \{a_{k+j}\} = \{a_{1+j}, a_{2+j}, a_{3+j} \cdots \}
$$
For example, for $j=3$, we have:
$$
\{{a_{k+3}}\}^{\infty}_{k=1} = \{a_{1+3}, a_{2+3}, a_{3+3}, \cdots \} = \{a_4, a_5, a_6, \cdots \}
$$
This slices part of a sequence (i.e. takes its 'tail'). Tails are useful in finding the limits of sequences.

## The limit of a sequence
> Heuristic Definition [Limit of sequence]: $L$ is the limit of the sequence $\{a_n\}$ as $n$ goes to $\infty$, if as $n$ gets larger and larger the terms of $\{a_n\}$ get closer and closer to $L$.
![Limit heuristic definition](images/limitheuristic.png))

**Problem with this heuristic definition**: It is imprecise. For $f(n) = \frac{1}{n}$, it is true that $f(n)$ gets closer to $0$ as $n$ increases, but $f(n)$ also gets closer to $-1$ too!

> Improved Heuristic Definition [Limit of a sequence]: $L$ is the limit of a sequence $\{a_n\}$ as $n$ goes to infinity no matter what positive tolerance $\epsilon > 0$ we are given, we can find a cutoff $N \in \mathbb{N}$ such that the terms $a_n$ approximate $L$ with an **error** less than $\epsilon$ provided that $n \geq N$.

> Formal Definition [Limit of a sequence]: $L$ is the limit of the sequence $\{a_n\}$ as $n$ goes to infinity if for every $\epsilon > 0$ there exists an $N \in \mathbb{N}$ such that if $n \geq N$, then
>
> $$|a_n - L| < \epsilon$$
> 
> In this case, we say that $\{a_n\}$ converges to $L$ and we write
> 
> $$\lim_{n \to \infty} a_n = L$$

### Using the formal definition to determine a limit
![Finding the limit of a sequence](images/manuallylimitsequence.png)

**Problem**: We would have to repeat this process forever if someone wants a smaller and smaller error $\epsilon$. 

## Limit of a sequence (pt 2.)
![Limit of a sequence, 1D](images/limit1d.png)

![Limit of a sequence, 1D](images/limit1d_epsilon.png)

These steps let us establish the theorem:
> Theorem: 
> 
> The following statements are equivalent:
>
> 1. $\lim\limits_{n \to \infty} a_n = L$
> 2. Every interval $(L - \epsilon, L + \epsilon)$ contains a **tail** of $\{a_n\}$. 
> 3. Every interval ($L - \epsilon$, $L+\epsilon$) contains **all but finitely many terms of $\{a_n\}$** (this essentially states the same as (2)
> 4. Every interval $(a,b)$ containing $L$ contains a **tail** of $\{a_n\}$. 
> 5. Every interval $(a,b)$ containing $L$ contains **all but finitely many terms** of $\{a_n\}$. 

**If any of these statements hold, the sequence converges to a limit.**

## Limit of a sequence (pt 3.)

### Using the formal definition of a limit

![Formal limit example 1](images/formallimitex1.png)

**Example 1**: Show that $\lim\limits_{n\to \infty} \frac{1}{\sqrt{n}} = 0$

Let $\epsilon > 0$. Find a cutoff value $N$ such that the definition of a limit is satisfied. 

If $\frac{1}{\epsilon^2} < n \Rightarrow \frac{1}{n} < \epsilon^2 \Rightarrow \frac{1}{\sqrt{n}} < \epsilon$

Hence, if $\frac{1}{\epsilon^2} < N$, then $n \geq N \Rightarrow |\frac{1}{\sqrt{n}} - 0| < \epsilon$

Therefore, the limit is $0$.

**Example 2**: Show that 
$$
\lim\limits_{n \to \infty} \dfrac{2n+2}{4n+3} = \dfrac{3}{4}
$$
First, find a cutoff $N$ such that if $n\geq N$, then
$$
|\dfrac{3n+2}{4n+3} - \dfrac{3}{4}| < \frac{1}{1000}
$$
That is, we found a cutoff $N$ that approximates our limit with a maximum error below $\frac{1}{1000}$.
Simplifying the expression, we have
$$
|\frac{-1}{16n+12}| = \frac{1}{16n+12} < \frac{1}{1000}
\\ 
n > 61.75
$$

Since $n>61.75$, pick our cutoff $N = 62$. 

**Example 3: Divergent Limit**. Consider $f(n) = \{(-1))^{n+1}\} = \{1,-1,1,\ldots\}$. Does $f(n)$ have a limit?

Solution: Assume $\lim\limits_{n \to \infty}f(n) = L$ and $\epsilon = \frac{1}{2}$.

Pick $k_0 \in \mathbb{N}$ such that
$$
2k_0 + 1 \geq \mathbb{N}
$$
Then
$$
a_{2k_0+1} = 1 \; (\text{since} \; (-1)^{2k+2}=1) \\
\Longrightarrow |1 - L| < \frac{1}{2} \\
\Longrightarrow L \in (\frac{1}{2}, \frac{3}{2})
$$

Similarly, pick $k_1 \in \mathbb{N}$ an even integer
$$
2k_1 \geq N
$$
Then

$$
a_{2k_1} = -1 \\
\Longrightarrow |-1 -L| < \frac{1}{2} \\
\Longrightarrow L \in (- \frac{3}{2} , - \frac{1}{2})
$$
We see that $L \in (-\frac{3}{2}, -\frac{1}{2})$ and $L \in (\frac{1}{2}, \frac{3}{2})$ simulatenously, which is not possible. Therefore, limit is DNE.

> Theorem [Uniqueness of Limits]
> 
> Assume that $\lim\limits_{n \to \infty}a_n = L$ and $\lim\limits_{n \to \infty}a_n = M$. Then
> 
> $$L = M$$

Proof of uniqueness of limits:

![Uniqueness Limit Proof](images/uniquenessoflimits.png)


Final note: It can be difficult to tell if a sequence converges and determining its limit if so. Consider the sequence
$$
a_1 = 1 \qquad a_{n+1} = cos(a_n)
$$ 
Although the sequence appears to converge numerically to $0.7390851332$, proving that this is the limit analtyically is difficult. Nonetheless, it is still possible to show its convergence is $cos(L) = L$.

## Divergence to Infinity
Recall that the following sequences diverge
$$
a_n = (-1)^{n+1} \\
a_n = n
$$

> Definition [divergence to infinity]: A sequence $\{a_n\}$ diverges to $\infty$ if for every $M > 0$ there exists an $N \in \mathbb{N}$ such that if $n \geq N$ then
>
> $$a_n > M$$
>
> Or
>
> $$ \lim\limits_{n \to \infty} a_n = \infty $$
![divergence_def](images/divergence-infty.png)

**Explained informally:** No matter what $M$ you choose, you can always find a cutoff $N$ such that any index after will be greater than $M$.


Example: Show that 
$$
\lim\limits_{n \to \infty} n^{\alpha} = \infty
$$
For $\alpha > 0$
Proof:
Given $M > 0$, choose 
$$N > M^{\frac{1}{\alpha}}$$

If $n > N$, then 
$$ n^{\alpha} > (M^{\frac{1}{\alpha}})^\alpha = M $$
### Polynomial limits summary
In general:
If $\alpha > 0$ then 
$$\lim\limits_{n \to \infty} n^\alpha = \infty$$

If $\alpha < 0$, then
$$ \lim\limits_{n \to \infty} n^\alpha = 0
$$
## Arithmetic for Limits of Sequences (1)
> Theorem: [Arithmetic rules for limits of sequences]
> Let $\{a_n\}$ and $\{b_n \}$ be sequences. Assume that $\lim\limits_{n \to \infty} a_n = L$ and $\lim\limits_{n \to \infty} b_n = M$. Then:
> 1. For any $c \in \mathbb{R}$, if $a_n = c$ for every $n$, then $c = L$.
> 2. For any $c \in \mathbb{R}$, $\lim\limits_{n \to \infty}ca_n = cL$
> 3. $\lim\limits_{n \to \infty}(a_n + b_n) = L + M$
> 4. $\lim\limits_{n \to \infty}a_n*b_n = L*M$
> 5. $\lim\limits_{n \to \infty}\frac{a_n}{b_n} = \frac{L}{M} if M \neq 0$
> 6. If $a_n \geq 0$ for all $n$ and if $a > 0$ then $\lim\limits_{n \to \infty} a^{\alpha}_n = L^{\alpha}$
> 7. For any $k \in \mathbb{N}$, $\lim\limits_{n \to \infty}a_{n+k} = L$

Observation from Rule 2): Error of $[c*Quantity] \approx c*Error$

Observation from Rule 3): Error of a sum $\approx$ sum of the errors

> Theorem: If $\lim\limits_{n \to \infty}\frac{a_n}{b_n}$ exists and $\lim\limits_{n \to \infty}b_n = 0$, then
> $$ \lim\limits_{n \to \infty}a_n = 0 $$
Consequence from this theorem: A function that is differentiable at $x=a$ must also be differentiable at that point.

## Arithmetic Limits for Sequences (Examples)
Example 1: Evaluate $\lim\limits_{n \to \infty} \frac{3n^2 + 2n - 1}{4n^2+2}$
We cannot evaluate this with the rules in the current form. **The key insight is to factor out the largest degree terms.**

![limex1](images/limitexample1.png)


Example 2: Evaluate 

$$ \lim\limits_{n \to \infty}\sqrt{n^2+n}-n$$

Multiply by its conjugate and then factor out an $n$:

$$ 
\sqrt{n^2+n}-n \\
= (\sqrt{n^2+n}-n)*(\frac{\sqrt{n^2+n}+n)}{\sqrt{n^2+n}+n}) \\
= \frac{n^2+n-n^2}{\sqrt{n^2+n}+n} = \frac{n}{\sqrt{n^2+n}+n}
$$

Factoring out $n$:

$$
= n* \frac{1}{\sqrt{n^2*(1+\frac{1}{n})}-n} \\
= \frac{n}{n} * \frac{1}{1+\frac{1}{n}+1} = \frac{1}{1+\frac{1}{n}+1}
$$
Evaluating this limit:

$$
\lim\limits_{n \to \infty} \frac{1}{1+\frac{1}{n}+1} \\
= \frac{1}{1+\frac{1}{\infty} + 1} \\
= \frac{1}{2}
$$

# Squeeze theorem for sequences
Consider the sequence $\{ \frac{sin(n)}{n}\}$. Does it converge? If so, what does it converge to?

![sqz](images/squeeze-graph.png)

Note that $|sin(n) \leq 1$ for all $n$, so 
$$ 
|\frac{sin(n)}{n} \leq \frac{1}{n}|
-\frac{1}{n} \leq \frac{sin(n)}{n} \leq \frac{1}{n}
$$
Since we know
$$
\lim\limits_{n \to \infty}\frac{1}{n} = 0 = \lim\limits_{n \to \infty} -\frac{1}{n} \Rightarrow \lim\limits_{n \to \infty}\frac{sin(n)}{n} = 0
$$
> Theorem [Squeeze Theorem for sequences]:
> Assume that $a_n, b_n, c_n$ are sequences such that
> 
> $$ c_n \leq b_n \leq a_n $$
>
> for all $n \in \mathbb{N}$. Assuming that
>
> $$ \lim\limits_{n \to \infty}a_n = L = \lim\limits_{n \to \infty}c_n $$
>
> Then $\lim\limits_{n \to \infty}b_n$ exists and
>
> $$\lim\limits_{n \to \infty}b_n = L$$

## Proof of squeeze theorem of sequences
![sqz_proof](images/squeeze-proof.png)


# Least Upper Bound Property
![bound-sets](images/bounded-sets.png)
> Definition [bounded sets]:
> Let $S \subset \mathbb{R}$.
> 1. $S$ is *bounded above* if $S$ has an upper bound $\alpha$.
> 2. $S$ is *bounded below* if $S$ has a lower bound $\beta$.
> 3. $S$ is *bounded* if $S$ is bounded above and below.

> Definition [Least upper bound]:
> $\alpha \in \mathbb{R}$ is the *least upper bound* for a set $S \subset \mathbb{R}$ if
> 1. $\alpha$ is an upper bound for $S$ and
> 2. if $\gamma$ is an upper bound for $S$, then $\alpha \leq \gamma$.
>
> If a set $S$ has a least upper bound, then we denote it by $lub(S)$. 
> The least upper bound of $S$ is also called the *supremum* of $S$, denoted by $sup(S)$

> Definition [Greatest lower bound]:
> $\beta \in \mathbb{R}$ is the *greatest lower bound* for a set $S \subset \mathbb{R}$ if 
> 1. $\beta$ is a lower bound for $S$, and
> 2. If $\gamma$ is a lower bound for $S$, then $\beta \geq \gamma$.
>
> If a set $S$ has a greatest bound, then we denote it by $glb(S)$. 
> 
> The greatest lower bound of $S$ is often called the *infimum* of $S$, denoted by $inf(S)$. 
![lowerbounds](images/lowerbounds.png)

> Definition [Maximum/minimum]:
> 1. If $S$ contains $\alpha = lub(S)$, then $\alpha$ is the *maximum* of $S$ and is denoted by $max(S)$. 
> 2. If $S$ contains $\beta = glb(S)$, then $\beta$ is the *minimum* of $S$ and is denoted by $min(S)$. 

> Axiom [Least Upper Bound Property or LUBP]
> A **nonempty** subset $S \subset \mathbb{R}$ that is bounded above always has a least upper bound.

Example: Consider $a_n = 1-\frac{1}{n}$. We know $1 = lub(S)$ and equivalently $\lim\limits_{n \to \infty}(1 - \frac{1}{n}) = 1$

> Definition [Monotonic sequences]:
> We say that $a_n$ is:
> 1. *increasing* if $a_n < a_{n+1}$ for all $n \in \mathbb{N}$
> 2. *non-increasng* if $a_n \leq a_n{n+1}$ for all $n \in \mathbb{N}$
> 3. *decreasing* if $a_n \geq a_{n+1}$ for all $n \in \mathbb{N}$
> 4. *non-decreasing* if $a_n \geq a_{n+1}$ for all $n \in \mathbb{N}$
> 5. *monotonic* if $a_n$ is either non-decreasing or non-increasing. 
> 6. *monotonic* if $a_n$ is also either decreasing or increasing.

Examples: 
- $\frac{1}{n}$ is decreasing.
- $\frac{n}{n+1} = 1-\frac{1}{n+1}$ is increasng.
- The sequence $cos(n)$ is neither non-decreasing or non-increasing.
- $1$ is non-decreasing and non-increasing.

> Theorem: [Monotone Convergence Theorem (MCT)]
> 1. If $a_n$ is non-decreasing and bounded above, then $a_n$ converges to $L = lub(a_n)$
> 2. If $a_n$ is non-decreasing and unbounded, then $a_n$ diverges to $\infty$

Also:
- If $a_n$ is non-increasing and bounded below, then $\lim\limits_{n \to \infty} a_n = glb(a_n)$
- If $a_n$ is non-increasing and unbounded, then $\lim\limits_{n \to \infty}a_n = - \infty$


# Mathematical induction Part 1
**To use the MCT, we must use mathematical induction**

Induction lets us prove an infinite number of statements $P_1, P_2, ... P_n, n \in \mathbb{N}$

If we can:
1. Prove $P_1$ is true (base case)
2. Prove: if $P_k$ is true for some k (inductive hypothesis), then $P_{k+1}$ is true (inductive step)

## Examples
For each example:
1. Prove it is monotonic
2. Prove it is bounded
3. Prove it converges
4. Find the limit

Example 1: $a_1 = 1$,$a_{n+1} = \frac{6+a_n}{4}$ for $n \geq 1$.
1) Notice $a_1 = 1$, $a_2 = 7/4$, $a_3 = \frac{6+\frac{7}{4}}{4}$ so it seems like $a_n$ is increasing / non-increasing 

Claim: $a_n$ is increasing, that is, $a_n < a_{n+1}$ forr all $n \in \mathbb{N}$. 
Use Induction.
Base case: $a_1 = 1, a_2 = \frac{7}{4}$, so $a_1 < a_2$. 

Inductive hypothesis (IH): Suppose $a_k < a_{k+1}$ for **some** $k \in \mathbb{N}$.

Then by IH: $a_k < a_{k+1}$
$$
6+a_k < 6 + a_{k+1} \\
\frac{6+a_k}{4} < \frac{6+a_{k+1}}{4} \\
\therefore a_{k+1} < a_{k+2}
$$
Therefore by induction, $a_n < a_{n+1}$ for all $n \in \mathbb{N}$, so $a_n$ is increasing and so is monotonic.

b) Since $a_1 = 1$ and $a_n$ is increasing, $a_n \geq 1$ for all $n \in \mathbb{N}$. **Pick any upper bound, does not need to be the least upper bound.**
Claim: $a_n \leq 10$ for all $n$.

Use Induction.

Base case: $a_1 = 1 \leq 10$

Then by IH: $a_k \leq 10$
So
$$6+a_k \leq 16 \\
\frac{6+a_k}{4} \leq 4 \\
a_{k+1} \leq 4 < 10
$$

Therefore, $a_n$ is bounded. 

c) Since $a_n$ is increasing and bounded above, it converges by the MCT.

d) We know
$$
L = \lim\limits_{n \to \infty} a_n = \lim\limits_{n \to \infty} a_{n+1} = \lim\limits_{n \to \infty}\frac{6+a_n}{4} = \frac{6+L}{4} \\

L = \frac{6+L}{4} \rightarrow 4L = 6 + L \rightarrow L = 2 \\
\therefore \lim\limits_{n \to \infty}a_n = 2
$$

Example 2: $a_1 = 3$, $a_{n+1} = \sqrt{21+4a_n}$

This time, **let's prove a) and b)** at the same time. That is, prove $\{a_n\}$ is non-decreasing and bounded above by $9$. To do this, reason on an interval: 

Claim: 
$$
3 \leq a_n \leq a_{n+1} \leq 9
$$
This will prove that $\{a_n\}$ is non-decreasing for all $n$. 

Proof using induction:

Base case: $a_1 = 3, a_2 = \sqrt{21+4(3)} = \sqrt{33} < 9$.
$$ 
\therefore 3 \leq a_1 \leq a_2 \leq 9
$$

IH: Suppose $3 \leq a_k \leq a_{k+1} \leq 9$ for some $k \in \mathbb{N}$
$$
\therefore 12 \leq 4a_k \leq 4a_{k+1} \leq 36 \\
\therefore 33 \leq 21 + 4a_k \leq 21 + 4a_{k+1} \leq 57 \\
\therefore 3 \leq \sqrt{33} \leq \sqrt{21 + 4a_k} \leq \sqrt{21 + 4a_{k+1}} \leq 9 \\
\therefore 3 \leq a_{k+1} \leq a_{k+2} \leq 9
$$
Therefore, $\{a_n\}$ is bounded above by 9 and non-decreasing. 

c) By MCT, $\{a_n\}$ converges since it is non-decreasing and bounded above.

d) $L = \lim\limits_{n \to \infty}a_n = \lim\limits_{n \to \infty}a_{n+1} = \lim\limits_{n \to \infty}\sqrt{21 + 4a_n} = \sqrt{21 + L}$

$$
\therefore L = \sqrt{21+4L} \\
\therefore L^2 = 21 + 4L \rightarrow L^2 - 4L - 21 = 0 \\
\therefore (L - 7)(L+3)  = 0 \\
\therefore L = 7, L = -3
$$
Since $3 \leq a_n \leq 9$ for all $n \in \mathbb{N}$, so $3 \leq L  \leq 9$ . Therefore $L \neq -3$, so $L = 7$

# Formal definition of a limit
- For $\lim\limits_{x \to a}f(x)$ to exist, $f(x)$ must be defined on an open interval $(\alpha,\beta)$ containing $x=a$, except possibly at $x=a$. 
- The value of $f(a)$ does not affect whether the limit exists or not.
- If the functions are equal, except possibly at $x=a$, then their limiting behavior $a$ is the same. 
# Limits of Functions Part 1

> Definition [Limit of a function]:
> We say that $L$ is the limit of $f(x)$ as $x$ approaches $a$ if for every $\epsilon > 0$ there exists a $\delta > 0$ such that if
>
> $$ 0 < |x-a| < \epsilon $$
> Then
>
> $$ |f(x) - L| < \epsilon  $$
>
> We write 
> $$\lim\limits_{x \to a} f(x) = L $$

## Proving the limit of a linear function
If $f(x) = mx + b$ where $m \neq 0$, then
$$
\lim\limits_{x \to a}mx + b = m(a)+b
$$
Given $\epsilon > 0$, if
$$
\delta = \frac{\epsilon}{|m|}
$$
and if $0 < |x-a| < \delta$, then
$$
|f(x) - (m(a)+b) = |(mx+b) - (ma+b)| \\
= |m|*|x-a| \\ 
< |m| * \frac{\epsilon}{|m|} \\
= \epsilon
$$
In words, this means that the limit of any linear function can be found using the formal definition and rearranging of variables.

## Proving the limit of $x^2$
Show that $\lim\limits_{x \to 3} x^2 = 9$.
Let $\epsilon > 0$. We want
$$
0 < |x-3| < \epsilon
$$
to imply
$$|x^2 - 9| = |x-3||x+3| < \epsilon $$
**We cannot choose $\delta = \frac{\epsilon}{|x+3|}$ since this is not a constant.**

Instead, use a **trick**: Assume $\delta \leq 1$. 

If 
$$ 0 < |x-3| < \delta \leq 1 $$
then
$$ 2 < x < 4$$
so
$$ |x+3| < |4+3| = 7$$
If $\delta < min (1, \frac{\epsilon}{7})$, then
$$ 
0 < |x-3| < \delta \Rightarrow \\
|x^2 - 9 | = |x-3||x+3| < \delta * 7 < \frac{\epsilon}{7} * 7 = \epsilon
$$ 

# Sequential Characterization of the Limit
> Theorem: [Sequential characterization of limits]
> 
> Let $f(x)$ be defined on an inerval containing $x=a$ except possibly at $x=a$. Then the following are equivalent:
>>
> 1. $\lim\limits_{x \ to a}f(x) = L$
> 2. If $\{x_n\}$ is a sequence with $x_n \to a$ and $x_n \neq a$ for each $n \in \mathbb{N}$, then 
>
> $$ \lim\limits_{n \to \infty} f(x_n) = L$$

To prove $\lim\limits_{n \to a^+} f(x)$, make sure $x_n$ is DECREASING and approaching $a$. 

## Proving the Uniqueness of Limits with Sequential Characterization of a Limit
Recall that if $\lim\limits_{n \to \infty}f(x) = L$ and $\lim\limits_{n \to \infty}f(x) = M$ then $L = M$.   

Let $\{x_n\}$ be such that $x_n \to a$ with $x_n \neq a$. Then 
$$ f(x_n) \to L$$
and
$$ f(x_n) \to M$$
so $L = M$

## Example 1
Show that $\lim\limits{x \to 0} \frac{|x|}{x}$ does not exist.

Assume that $\lim\limits{x \to 0} \frac{|x|}{x} = L$. 

Let $x_n = \frac{1}{n}$. Then $x_n \to 0$ and $f(x_n) = 1 \to 1$. So $L = 1$.

Let $y_n = \frac{-1}{n}$. Then $y_n \to 0$ and $f(y_n) \to -1$. So $L=-1$. 

Conclusion: No $L$ exists.

## Example 2
Show $\lim f(x) = sin(\frac{1}{x})$ does not exist.

Let $x_n = \frac{1}{\frac{\pi}{2} + 2n\pi} \to 0$.

Let $y_n = \frac{1}{\frac{3\pi}{2} + 2n\pi} \to 0$.

Then $f(x_n) = f(\frac{\pi}{2} + 2n\pi) = 1$ and $f(y_n) = sin(\frac{3\pi}{2} + 2n\pi) = -1$

Then $f(x_n) \to 1$ and $f(y_n) \to -1$. 

Therefore, the limit does not exist

## General strategy
To show $f(x)$ has no limit then do either:
1. Find a sequence $\{x_n\}$ with $x_n \to a, x_n \neq a$ for which $\lim\limits_{n \to \infty}f(x_n)$ does not exist. 
2. Find two sequences $\{x_n\}$ and $\{y_n\}$ with $x_n \to a$, $x_n \neq a$ and $y_n \to a$, $y_n \neq a$ or which $\lim f(x) = L$ and $\lim f(y_n) = M$ but $L \neq M$. 

# Arithmetic Rules of Limits of Sequences (2)
> More arithmetic of limits of sequences:
> If $\lim\limits_{n \to \infty}a_n = L$ and $\lim\limits_{n \to \infty}b_n = M$
> 
> 1. If $c \in \mathbb{R}$ then $\lim\limits_{n \to \infty}a_n = cL$
> 2. $\lim\limits_{n\to \infty}(a_n + b_n) = \lim\limits_{n\to\infty}a_n + \lim\limits_{n\to\infty}b_n = L + M$
> 3. $\lim\limits_{n\to\infty}(a_nb_n) = \lim\limits_{n\to\infty}a_n * \lim\limits_{n\to\infty}b_n = LM$
> 4. If $b \neq 0$ for all $n \in \mathbb{N}$ and $M \neq 0$ then $\lim\limits_{n\to \infty}\frac{1}{b_n} = \frac{1}{\lim\limits_{n \to \infty}}\frac{1}{b_n} = \frac{1}{M}$
> 5. If $b \neq 0$ for all $n \in \mathbb{N}$ and $M \neq 0$ then $\lim\limits_{n \to \infty}\frac{a_n}{b_n} = \frac{\lim\limits_{n \to \infty}a_n}{\lim\limits_{n \to \infty b_n}} = \frac{L}{M}$
> 6. If $\lim\limits_{n \to \infty}\frac{a_n}{b_n} = S$ and $\lim\limits_{n \to \infty}b_n = 0,$ then $\lim\limits_{n \to \infty}a_n = 0$


## Arithmetic Rules limits of of functions
The limit rules for functions are similar to that of sequences.
> If $\lim\limits_{x \to a}f(x) = L$ and $\lim\limits_{x \to a}g(x) = M$
> 
> 1. If $c \in \mathbb{R}$ then $\lim\limits_{x \to a}f(x) = cL$
> 2. $\lim\limits_{x \to a}(f(x) + g(x)) = L + M$
> 3. $\lim\limits_{x \to a}f(x)g(x) = L*M$
> 4. If $M \neq 0$ and $M \neq 0$ then $\lim\limits_{x\to a}\frac{1}{g(x)} = \frac{1}{M}$
> 5.  If $M \neq 0$ and $M \neq 0$ then $\lim\limits_{x\to a}\frac{f(x)}{g(x)} = \frac{L}{M}$
> 6. If $\lim\limits_{x \to a}g(x) = 0$ and $\lim\limits_{x \to a}\frac{f(x)}{g(x)}= L$ then $\lim\limits_{x \to a}f(x)$ exists and equals 0. 


## Limits of polynomials
For a polynomial: $\lim\limits{x \to a}p(x) = p(a)$. That is, a polynomial is always defined and has a limit. 

## Limits of rational functions
Strategy for evaluating limits of rational functions:
1. Evaluate the denominator. If denominator $\neq 0$, then then evaluate the polynomial.
2. If the deonominator is 0 and the numerator is not zero, then the limit does not exist.
3. If the denominator and numerator are both 0, then factor out something and re-evaluate the limit.

## One sided limits
> Definition [limit from above]:
> $L$ is the limit of $f(x)$ as $x$ approaches $a$ from above if for every $\epsilon > 0$ there exists $\delta > 0$ such that if $a < x < a + \delta$ then 
> $$ |f(x)-L| < \epsilon$$
> We thus write $\lim\limits_{x \to a^+}f(x) = L$


> Theorem [two sided limits]:
> $\lim\limits_{x \to a^+}f(x) = L = \lim\limits_{x \to a^-}f(x)$


# Squeeze Theorem for Limits
> Theorem [squeeze theorem for limits]:
> Assume that $f(x), g(x), h(x)$ are all such that
> 
> $$ g(x) \leq f(x) \leq h(x) $$
> 
> for all $x \neq a$. 
>
> Assume also that 
> 
> $\lim\limits_{x \to a}g(x) = L = \lim\limits_{x \to a}h(x)$
>
> Then $\lim\limits_{x \to a}f(x)$ exists and 
>
> $$ \lim\limits_{x \to a}f(x) = L $$

## Example
Consider the limit of $\frac{sinx}{x}*x$.
We know:
$$ |sin(\frac{1}{x})| \leq 1 \Rightarrow |xsin(\frac{1}{x}| \leq |x| \rightarrow -|x| \leq xsin(\frac{1}{x}) \leq |x|$$

For all $x \neq 0$. **That is, $sin(\frac{1}{x})x$ is squeezed by $|x|$ and $-|x|$.**

Hence $\lim\limits_{x \to 0} -|x| = 0 = \lim\limits_{x \to 0}|x| \Rightarrow \lim\limits_{x \to 0}xsin(\frac{1}{x}) = 0$

# Fundamental Trig Limit (FTL)
> Theorem [Fundamental Trig Limit (FTL)]: 
> $$\lim\limits_{\theta \to 0}\frac{sin(\theta)}{\theta} = 1$$
> $$\lim\limits_{\theta \to 0}\frac{1-cos\theta}{\theta} = 0$$
# TODO: Examples of FTL

# Horizontal Asymptotes and Limits at Infinity (pt 1)
> Definition [limit at $\infty$]:
> We say $L$ is the limit of $f(x)$ is $x$ approaches $\infty$ if for every $\epsilon > 0$ there exists a cutoff $N > 0$ such that if $x > N$, then 
> $$ |f(x) - L| < \epsilon

> Definition [horizontal asymptote]:
> We say that $y = L$ is a horizontal asymptote for $f(x)$ if one of $\lim\limits_{x\to\infty}f(x) = L$ or $\lim\limits_{x\to-\infty}f(x) = L$.

# Horizontal Asymptotes and Limits at Infinity (pt 2)

## Horizontal asymptotes of functions of the form p(x)/q(x)
Let $p(x)$ and $q(x)$ be polynomials. Let $j$ and $k$ be positive integers that denote the highest power of the terms $p(x)$ and $q(x)$ respectively. Then the limit as $x$ approaches infinity of $\frac{p(x)}{q(x)}$ will be one of three things:
1. If $j=k$: $\frac{a}{b}$ where $a$ and $b$ are the coefficients of the highest power
2. If $j<k$: 0, since the power of denominator "dominates" the expression
3. If $j>k$: $\pm \infty$ depending on the sign of $\frac{a}{b}$ and whether $x \to \infty$ or $x \to -\infty$, and whether or not $j-k$ is odd. 

## Squeeze theorem for limits at infinity
The squeeze theorem holds for limits at infinity as well. 

Example: Evaluate $\lim\limits_{x \to \infty}\frac{sinx}{x}$. 

Note that $|sinx| \leq 1$ for all $x$, that is, $-1 \leq sinx \leq 1$. Therefore,
$$ -\frac{1}{x} \leq \frac{sinx}{x} \leq \frac{1}{x} $$
And since $\lim\limits_{x\to\infty}\frac{-1}{x} = \lim\limits_{x\to\infty}\frac{1}{x} = 0$, by the squeeze theorem, $\lim\limits_{x\to\infty}\frac{sinx}{x} = 0$


# Fundamental Log Limit
> Theorem [Fundamental Log Limit]:
> $$ \lim\limits_{x\to\infty}\dfrac{ln(x)}{x} = 0$$
It follows that for any positive number $p$,
$$\lim\limits_{x\to\infty}\frac{ln(x^p)}{x} = 0$$
Proof:
$$\lim\limits_{x\to\infty}\frac{ln(x^p)}{x} = \lim\limits_{x\to\infty}\frac{\frac{1}{p}*ln(x^p)}{x^p} \\
= \frac{1}{p} * 0 \\ 
= 0
$$

It also follows that $\lim\limits_{x\to\infty}\dfrac{x^p}{e^x} = 0$.
Proof. Let $u=e^x$, so $x = ln(u)$ and
$$
\lim\limits_{x\to\infty}\dfrac{x^p}{e^x} = \lim\limits_{x\to\infty}\dfrac{(ln(u))^p}{u} = \lim\limits_{x\to\infty}\dfrac{ln(u)}{e^{\frac{1}{p}}}^p \\
= 0^p \\
= 0
$$
Summary:
$$ ln(x) \ll x^p \ll e^x $$
as $x \to \infty$.


> Definition [Right-hand infinite limit]:
> 
> We say that the limit of $f(x)$ as $x$ approaches $a$ from above (i.e. from the right) is $\infty$ if for every $M > 0$, there exists a $\delta > 0$ such that if $a < x < a+\delta$, then
> $$ f(x) > M$$
> \
> So we write $\lim\limits_{x\to a^+}f(x) = \infty$. 

> Definition [Vertical asymptote]:
> \
> We say that $x=a$ is a vertical asymptote for $f(x)$ if one of the following holds:
> $$ \lim\limits_{x\to a^\pm}f(x) = \pm \infty$$

To find whether the left / right hand side limit is negative or positive infinity, analyze the signs of the functions using a sign diagram. 

# Continuity
> Definition [continuity]:
> \
> We say that $f(x)$ is continuous at $x=a$ if
> 1. $\lim\limits_{x\to a}f(x)$ exists.
> 2. $\lim\limits_{x\to a}f(x) = f(a)$

**Note that $2) \Rightarrow 1)$. That is, if the function evaluated at $a$ is equal to its limit at $a$, then $f(x)$ has a limit at $a$.**


> Definition [Epsilon-delta version of continuity]:
> \
> We say that $f(x)$ is continuous at $x=a$ if for every $\epsilon > 0$ there exists $\delta > 0$ such that if $|x-a|<\delta$ then 
> $$ |f(x)-f(a)|<\epsilon$$ 
Notice that we accomodate for $x=a$ by removing the need for $0<|x-a|<\delta$. Since it will still be less than $\epsilon$. 

> Theorem [Sequential characterization of continuity]
> \
> The following are equivalent:
> 1. $f(x)$ is continuous at $x=a$
> 2. If $\{x_n\}$ is a sequence with $x_n \to a$, then $\lim\limits_{n \to \infty}f(x_n) = f(a)$

# Types of Discontinuities
There are 4 types of discontinuities:
1. Removable discontinuities, where the discontinuous point can be added in and "repaired"
2. Essential discontinuities, where the discontinuity is a fundamental part of the function and there is no way to eliminate the discontinuity.
   1. Jump discontinuity
   2. Vertical asymptotes
   3. Oscillatory discontinuity 


> Definition [Removable discontinuity]:
> \
> We say that $f(x)$ has a removable discontinuity at $x=a$ if $\lim\limits_{x\to a}f(x)$ exists but is not $f(a)$. 
We can define 
$$g(x) = \begin{cases} f(x) & \text{if } x \neq a \\ \lim\limits_{x\to a}f(x) & \text{if } x = a \end{cases}$$

> Definition [Jump discontinuity]:
> \
> We say that $f(x)$ has a jump discontinuity at $x=a$ if $\lim\limits_{x\to a^-}f(x)$ and $\lim\limits_{x\to a^+}f(x)$ exist but are not equal.

The "jump distance" of a discontinuity in $\frac{x}{|x|}$ is defined by its vertical scale. It has a jump distance of 2. If considering $2\frac{x}{|x|}$ then we have a jump distance of 4. 

Example: $f(x) = \frac{|x|}{x}$ at $x=0$.

> Definition [Vertical asymptote]:
> \
> We say that $x=a$ is a vertical asymptote for $f(x)$ if one of the following holds:
> $$ \lim\limits_{x\to a^\pm}f(x) = \pm \infty$$

**Oscillatory discontinuities** not defined, but an example is $sin(\frac{1}{x})$ at $x=0$.  

# Continuity of Polynomials, Trig, and Exponential Functions
> Theorem [Continuity of Polynomials]
> \
> Any polynomial p(x) such that
> $$ p(x) = a_0 + a_1x + a_2x^2 \dots + a_nx^n $$
> is always continuous at each $a \in \mathbb R$. 

> Theorem [Continuity of sinx and cosx]:
> \
> Both $sinx$ and $cosx$ are continuous at each $a \in R$. 

Proof for $sinx$: Using the sum of angles identity for $sinx$: 
$$\lim\limits_{x\to a}sin(x) = \lim\limits_{h \to 0}sin(a+h) \\
= \lim\limits_{h\to 0}sin(a)cos(h) + cos(a)sin(h) \\
= sin(a)*1 + cos(a)*0\\ 
= sin(a)
$$
Proof for $cosx$: Using the angle sum identity for $cosx$:
$$\lim\limits_{x\to a}cos(x) = \lim\limits_{h \to 0}cos(a+h) \\
= \lim\limits_{h\to 0}cos(a)cos(h) + sin(a)sin(h) \\
= cos(a)*1 + sin(a)*0\\ 
= cos(a)
$$

> Theorem [Continuity of inverse functions]
> If a function is continuous at some point $a$, then its inverse will be continuous at $a$ as well. 

We use apply this theorem to argue that $e^x$ is continuous everywhere since $ln(x)$ is continuous everywhere (...but when did we prove that?)

# Arithmetic Rules for Continuity
> Theorem [Arithmetic Rules for Continuity]:
> \
> If $f$ and $g$ are continuous at $x=a$, then we have the following:
> 1. $(cf)(x) = c*f(x)$ is continuous at $x=a$ for all $c \in \mathbb R$
> 2. $(f+g)(x) = f(x) + g(x)$ is continuous at $x=a$.
> 3. $(fg)(x) = f(x)g(x)$ is continuous at $x=a$.
> 4. If $g(a) \neq 0$ then $(\dfrac{f}{g})(x) = \frac{f(x)}{g(x)}$ is continuous at $x=a$. 

> Theorem [Continuity of composite functions]
> \
> If $f(x)$ is continuous at $x=a$ and $g(y)$ is continuous at $y=f(a)$ then $h(x) = g \circ f(x)$ is continuous at $x=a$. 

Proof. Let $x_n \to a$. Then $f(x_n) \to f(a)$ since $f(x)$ is continuous at $x=a$. Since $g(y)$ is continuous at $f(a)$, then
$$h(x_n)= g \circ f(x_n) = g(f(x_n)) \to g(f(a)) = g \circ f(a) = h(a)$$

# Continuity on an Interval
> Definition [Continuity on an open interval]
> \
> We say that $f(x)$ is continuous on the open interval $I$ if it is continuous at every $a\in I$. 

> Definition [One-sided continuity]
> \
> We say that $f(x)$ is continuous from the left at $x=a$ if 
> $$ \lim\limits_{x\to a^-}f(x) = f(a)$$
> \
> We say that $f(x)$ is continuous from the right at $x=a$ if 
> $$ \lim\limits_{x\to a^+}f(x) = f(a)$$

Example: $f(x) = \sqrt{x}$ is continuous from the right at $0$. 

> Definition [Continuity on a closed interval]
> \
> We say that $f(x)$ is continuous on the closed interval $[a,b]$ if:
> 1. It is continuous on $(a,b)$. That is, $f(x)$ is continuous at every $x \in (a,b)$ in the usual sense.
> 2. $\lim\limits_{x\to a^+}f(x) = f(a)$
> 3. $\lim\limits_{x\to b^-}f(x) = f(b)$

That is, $f(x)$ must be continuous between the closed interval, and it is continuous from the left and right endpoints. 

Example: $f(x) = \sqrt{1-x^2}$.

$f$ is continuous on the open interval $(-1,1)$. It is also continuous on the closed interval $[-1,1]$ although it is not continuous at $x=-1$ or $x=1$ We note that $f(-1) = \lim\limits_{x\to -1^+}\sqrt{1-x^2} = 0$ and $f(1) = \lim\limits_{x\to 1^-}\sqrt{1-x^2} = 0$, so $f(x)$ is continuous on $[-1,1]$. 

Summary:
- If limit of $f(x)$ at $x=a$ does not exist, then $f(x)$ at $x=a$ may still be continuous if either the left/right hand limit exists and $f(a) = L$ where $L$ is the limit. 


# Intermediate Value Theorem (IVT)
> Definition [Intermediate Value Theorem]

> Assume that $f$ is continuous on the closed interval $[a,b]$ and either 
> $$ f(a) < \alpha < f(b)$$
> or 
> $$ f(a) > \alpha > f(b)$$
> Then there exists $c \in (a,b)$ such that $f(c) = \alpha$. 

Example: Show that there exists $c \in (0,1)$ such that $cos(c) = c$. 

Solution: Let $h(x) = cos(x)-x$.
Then we know $h$ is continuous on the closed interval $[0,1]$. Morever, we have
$$ h(0) = cos(0) - 0 = 1 > 0$$

And 
$$h(1) = cos(1) - 1 < 0 $$

Since this satisfies the conditions of the IVT, we conclude that there exists $0 < c < 1$ such that $h(c) = 0$ or equivalently that $cos(c) = c$. 

# Approximating Roots of a Polynomial
Problem: How do we know if a polynomial has any real roots and if it does, how do you find them? 

We apply the IVT in an algorithm to approximate roots of a polynomial $p(x)$:
1. Guess values $a$ and $b$ where $p(a) > 0$ and $p(b) < 0$. 
2. Test the midpoint of $p(x)$ at $\frac{a+b}{2}$. If midpoint $< 0$, then the new minimum value is $a=\frac{a+b}{2}$, $b=b$ (remains the same). If midpoint $> 0$, then max value is $b=\frac{a+b}{2}$, $a=a$ (remains the same).
3. Keep doing this until we have a good enough approximation. The root is thus the midpoint of $a$ and $b$. 

**The length of the interval is $b - a = \frac{1}{2^k}$ where $k$ is the number of iterations of the algorithm.**

The error of the estimate is the distance from the final estimate to each of the endpoints in the final interval. That is,

$|d - c| = |b-c|/2 \leq \frac{1}{2^{k+1}}$

Where $d$ represents the root. The error is $2^{k+1}$ since we know the length of the interval is $2^{k}$ and we are measuring half the distance of the interval when we take root - max. 


# Bisection Method

> Alternative Theorem [Intermediate Value Theorem (IVT)]: Assume that $f(x)$ is continuous on $[a,b]$ and that $f(a)f(b) < 0$. Then there exists $c \in (a,b)$ such that
> 
> $$ f(c) = 0$$

Given a continuous function $f$ and a positive tolerance $\epsilon > 0$, find a point $d$ so that there exists a point $c$ with $f(c) = 0$ and $|c-d| < \epsilon$. 

Algorithm:
1. Find two points $a<b$ with $f(a)f(b) < 0$. That is, they must have opposite signs. 
2. Set $l = b-a$.
3. Set counter $n$ to equal $0$.
4. Let $d = \frac{a+b}{2}$
5. If $\frac{l}{2^{n+1}} < \epsilon$, then stop.
6. If $f(d) = 0$, then stop.
7. If $f(a)f(d) < 0$, let $b=d$ and $n=n+1$, then go to Step 4. 
8. Let $a=d$ and $n=n+1$, then go to Step 4. 


# Extreme Value Theorem
> Definition [Global Maxima and Global Minima]: Suppose that $f : I \rightarrow \mathbb R$, where $I$ is an interval. Then:
> - We say that $f(x)$ has a global maximum on $I$ at $x=c$ if $c \in I$ and $f(x) \leq f(c),  \forall x \in I$. 
> - We say that $f(x)$ has a global minimum on $I$ at $x=c$ if $c\in I$ and $f(x) \leq f(c), \forall x \in I$.
> - We say that $f(x)$ has a global extremum on $I$ at $x=c$ if it has either a global maximum or a global minimum for $f(x)$ on $I$ at $x=c$. 


Example: $f(x)=$ on the open interval $(0,1)$ has no largest or smallest value even though it "wants" to have a maximum/minimum at 0 and 1 (but they are not included). 

> Theorem [Extreme Value Theorem (EVT)]:
> Suppose that $f(x)$ is continuous on $[a,b]$. Then there exists $c_1$ and $c_2 \in [a,b]$ such that 
> $$ f(c_1) \leq f(x) \leq f(c_2)$$
> For all $x \in [a,b]$.  


EVT tells us that a continuous $f(x)$ has either a global max or min at $c \in [a,b]$, but does not tell us how to find them.

Important fact: Assuming that $f(x)$ has either a max or min point, then either:
1. $c$ is an end point at the interval $[a,b] \Rightarrow c=a$ or $c=b$
2. $c$ is not an endpoint of the interval $[a,b] \Rightarrow c \in (a,b)$

Key Takeaway: continuous functions behave differently on closed intervals than they do on open intervals. 

# Instantaneous Velocity
> Definition [Instantaneous Velocity]: The instantaneous velocity of an object at time $t_0$ is given by 
> $$ v(t_0) = \lim\limits_{h \to 0} \dfrac{s(t_0+h)-s(t_0)}{h}$$
>  Provided that the limit exists.

# Derivatives
> Definition [Average Rate of Change]: For a function $f(t)$, the average rate of change of $f(t)$ as $t$ goes from $t_0$ to $t_1$ to is the ratio
> $$ \dfrac{f(t_1)-f(t_0)}{t_1-t_0} $$
Average rate of change is an *estimation** of the instantaneous rate of change of $f(t)$ at $t_0$. 


> Definition [Instantaneous Rate of Change]: Given a function $f(t)$ the instantaneous rate of change at $t_0$ is:
> $$ \lim\limits_{h \to 0} \dfrac{f(t_0+h)-f(t_0)}{h}



> Definition [Newton Quotient]: Given a function $f(t)$, a point $t=a$ and $h \neq 0$, the ratio:
> $$ \lim\limits_{h \to 0} \dfrac{f(a+h)-f(a)}{h}$$
> is called the **Newton quotient** for f(t) at $t=a$.
## Equation of a Tangent Line
> Definition [Tangent Line]: The tangent line of $f(x)$ at $x=a$ is the line passing through $(a,f(a))$ with slope equal to $f^\prime (a)$. That is,
> $$y=f(a)+f^\prime (a)(x-a)$$

Example 1: Derivative of a constant function

For $f(x)=c$ for all $c\in \mathbb R$:

$$f^\prime (a) = \lim\limits_{h\to 0} \dfrac{f(a+h)-f(a)}{h} \\ = 0$$

Example 2: Derivative of linear function:

Assume that $f(x) = mx+b$. Then

$$ f^\prime(a) = \lim\limits_{h\to 0} \dfrac{f(a+h)-f(a)}{h} \\
= \lim\limits_{h\to 0} \dfrac{(m(a+h)+b)-(ma+b)}{h} \\
= \lim\limits_{h\to 0} \dfrac{ma+mh+b-ma-b}{h} \\ 
= \lim\limits_{h\to 0} \dfrac{mh}{h} \\ 
= m
$$
# Derivatives and Continuity
> Definition [Derivative]: We say that $f(t)$ is differentiable at $t=a$ if:
> $$\lim\limits_{h\to 0} \dfrac{f(a+h)-f(a)}{h}$$
> exists.

> Definition [Derivative Alternative]: 
> $$ f^\prime(a) = \lim\limits_{t\to a} \dfrac{f(t)-f(a)}{t-a}$$ 

> Theorem [Differentiation Implies Continuity]:
> Assume that $f(t)$ is differentiable at $t=a$. Then $f(t)$ is continuous at $t=a$. 

If a function is not continuous at some point, then it is not differentiable at that point. The derivative will be infinite at that point. 

**If a function is continuous, it is not necessarily differentiable**. 

Example: $f(x)=|x|$ at $x=0$. The newton quotient will be $\lim\limits_{x\to 0}\dfrac{|x|}{x}$ 

Which is 1 from the left but -1 from the right. Hence $f(x) = |x|$ is continuous but not differentiable at 0. 

Interesting notes about derivatives and continuity: 
- Continuous but not differentiable functions have a famous application to fractals
- Most continuous functions are nowhere differentiable. 

# Derivative Function
Leibniz Notation: $\dfrac{df}{dt}$ represents the derivative of $f$ respect to $t$.

To denote $f^\prime(a)$, the derivative at $t=a$:
$$ \dfrac{df}{dt}|_{a}$$

## Higher derivatives
The second derivative if $f(x)$ is denoted by:
$$ f^{\prime\prime}(x) \quad \text{or} \quad f^{(2)}(x) \quad \text{or} \quad \dfrac{d^2}{dx^2}(f(x))$$

The third, fourth, etc. derivative can also be calculated this way.


## Derivative of x^2
Using first principles:

$$
\begin{aligned}
f^\prime(x) = \lim\limits_{h \to 0}\dfrac{f(x+h)-f(x)}{h} \\
= \lim\limits_{h \to 0} \dfrac{(x+h)^2-x^2}{h} \\
= \lim\limits_{h \to 0} \dfrac{x^2+2xh+h^2-x^2}{h} \\
= \lim\limits_{h \to 0} \dfrac{2xh+h^2}{h} \\
= \lim\limits_{h \to 0} 2x+h \\
= 2x
\end{aligned}
$$

# Derivatives of sin and cos
To derive the derivative of $sinx$ and $cosx$, we make use of the fundamental trig limits $\lim\limits_{\theta \to 0}\dfrac{sin\theta}{\theta} = 1$ and $\lim\limits_{\theta \to 0}\dfrac{cos\theta-1}{\theta} = 0$. 

> Theorem [Derivative of $sin(x)$]: 
> $$ \dfrac{d}{dx}sin(x) = cos(x) $$

> Theorem [Derivative of $cos(x)$]:
> $$ \dfrac{d}{dx}cos(x) = -sin(x) $$


## Proof of derivative of sin
$$
\begin{aligned}
\lim\limits_{h \to 0} \dfrac{sin(x+h) - sin(x)}{h} \\
= \lim\limits_{h \to 0} \dfrac{sin(x)cos(h)+cos(x)sin(h))-sin(x)}{h} \\
= \lim\limits_{h \to 0} \Bigg(sin(x) \dfrac{cos(h)-1}{h} + cos(x)\dfrac{sin(h)}{h}\Bigg) \\
= sin(x)\lim\limits_{h \to 0}\dfrac{cos(h)-1}{h} + cos(x)\lim\limits_{h \to 0}\dfrac{sin(h)}{h} \\
= sin(x)*0+cos(x)*1\\
= cos(x)
\end{aligned}
$$

## Proof of derivative of cos
$$
\begin{aligned}
\lim\limits_{h \to 0} \dfrac{cos(x+h)-cos(x)}{h} \\ 
= \lim\limits_{h \to 0}\dfrac{cos(x)cos(h)-sin(x)sin(h) - cos(x)}{h} \\
cos(x)\lim\limits_{h \to 0} \dfrac{cos(h)-1}{h} - sin(x)\lim\limits_{h \to 0} \dfrac{sin(h)}{h} \\
= cos(x)*0 - sin(x)*1 \\
= -sin(x)
\end{aligned}
$$

# Derivative of Exponentials
> Theorem [Derivative of $e^x$]:
> $$\dfrac{d}{dx}e^x = e^x

> Theorem [Derivative of $a^x$]:
> $$ \dfrac{d}{dx}a^x = ln(a)*a^x$$
> For real numbers $a > 0$.


# Arithmetic Rules for Differentiation

## Constant Multiple Rule:
> Let $h(x) = cf(x)$. Then $h(x)$ is differentiable at $x=a$ and 
> $$ h^\prime(a) = cf^\prime(a) $$

## Sum Rule
> Let $h(x) = f(x)+g(x)$. Then $h(x)$ is differentiable at $x=a$ and 
> $$h^\prime(a) = f^\prime(a) + g^\prime(a)$$

## Product Rule
> Let $h(x) = f(x)g(x)$. Then $h(x)$ is differentiable at $x=a$ And
> $$h^\prime(a) =f^\prime(a)g(a) + f(a)g^\prime(a)$$

## Quotient Rule
> Let $h(x) = \dfrac{f(x)}{g(x)}$. If $g(a) \neq 0$ then $h(x)$ is differentiable at $x=a$ and
> $$h^\prime(a) = \dfrac{f^\prime(a)g(a)-f(a)g^\prime(a)}{(g(a))^2}$$

## Reciprocal rule
> Let $h(x) = \dfrac{1}{g(x)}$. If $g(a) \neq 0$ then $h(x)$ is differentiable at $x=a$ and
> $$h^\prime(a) = \dfrac{-f^\prime(a)}{(f(a))^2}$$
> **Reciprocal rule is just a special case of quotient rule for f(x) = 1.**

# Linear Approximation 

$$
\lim\limits_{x \to a}\dfrac{f(x)-f(a)}{x-a} = f^\prime(a) \\
$$
So for values of $x$ that are close to $a$, we have
$$
\dfrac{f(x)-f(a)}{x-a} \approx f^\prime(a)
$$

Rearranging for $f(x)$, we get 
$$
f(x) \approx f(a) + f^\prime(a)(x-a)
$$

> Definition [Linear Approximation]:
> Let $y=f(x)$ be differentiable at $x=a$. Then the linear approximation of $f(x)$ at $x=a$ is the function
> $$ L_a^f(x) = f(a) + f^\prime(a)(x-a)$$
> AKA the **linearization** of $f(x)$ or the **tangent line 
approximation** of $f(x)$ at $x=a$. 


## Properties of Linear Approximations:
1. $L_a^f(a) = f(a)$
2. $L_a^f(x)$ is differentiable at $x=a$ and $L_a^{f\prime}(a) = f^\prime(a)$
3. $L_a^f(x)$ is the only first degree polynomial with Property 1 and Property 2. 

# Error of Linear Approximation
> Definition [Error in linear approximation]: Let $y=f(x)$ be differentiable at $x=a$. Then the error in using linear approximation to estimate $f(x)$ is given by
> $$Error = |f(x)-L_a(x)|$$

## Observations
1. The further away from $a$ we are in our linear approximation, the larger the potential error. 
2. Second observation: The more curved the graph is to $x=a$, the greater the potential error. **This is measured by the second derivative**. 
## Error in linear approximation theorem
> Theorem [Error in Linear Approximation Theorem]: Assume $f(x)$ is such that $|f^{\prime\prime}(x)| \leq M$ for each $x$ in an interval $I$ containing a point $a$. Then
> $$ |f(x) - L_a(x)| \leq \frac{M}{2}(x-a)^2$$
> for each $x \in I$.

# Applications of Linear Approximation

## Estimating Change
$$\Delta y \approx f^\prime(a) \Delta x$$

## Approximating $e^{-x^2}$
How does $f(x)=e^{-x^2}$ behave near $x=0$?

Start with the simpler function $h(u)=e^u$. And let $u = -x^2$.
Since $h(0) = h^\prime(0) = e^0 = 1$ we have

$$e^u \approx L_0^h(u) = 1+u$$
Substituting $u$, we have
$$
L_0^h(u) = 1-x^2 \approx f(x)
$$

# Newton's Method
> Algorithm [Newton's Method]: To solve $f(x) = 0$, solve the recursive sequence 
> $$x_{n+1} = x_n - \dfrac{f(x_n)}{f^\prime(x_n)}$$

## Examples
Heron's algorithm to approximate $\sqrt{2}$ is Newton's method. Solve
$$f(x) = x^2-2 = 0$$

Let 
$$x=1$$
Then solve the recursive sequence
$$
\begin{aligned}
x_{n+1} = x_n - \dfrac{f(x_n)}{f^\prime(x_n)} \\
 = x_n - \dfrac{x_n^2-2}{2x_n} \\ 
 = \dfrac{1}{2}(x_n+\frac{2}{x_n}) 
\end{aligned}
$$

## Convergence of Newton's Method
1. Newton's method converges rapidly for most **nice** functions
2. Newton's method has quadratic convergence - the number of decimal places of accuracy doubles per each iteration. In bisection method, it takes roughly 4 iterations to improve accuracy by one decimal place.
3. To achieve $n$ decimal places of accuracy, terminate the procedure when two consecutive iterations agree to $n$ decimal places. 
4. Newton's method can fail to converge, but Bisection method always converges.

## Example of newton's method failing
$$f(x) = arctan(x)$$
With $x_1 = 1.4$


# Inverse Function Theorem
> Theorem [Inverse Function Theorem]: If $f$ is invertible on $[c,d]$ and $f$ is differentiable at $a \in (c,d)$ and $f^\prime(a) \neq 0$, then $f^{-1}$ is differentiable at $b = f(a)$ and
> $$f^{-1 \prime}(b) = \dfrac{1}{f^\prime(f^{-1}(b))}$$
Also $L_a^f(x)$ is invertible and $(L_a^f)^{-1} = L_{f(a)}^{f^{-1}}=L_b^{f^{-1}}$




## Example of IFT
Let $f(x)=x^3$ and $f^{-1}(y) = g(y)=y^{\frac{1}{3}}$. Let $a=2$. Find
$$g^\prime(f(a)) = g^\prime(8)$$

We know that $f^\prime(x) = 3x^2 so by the IFT we have
$$
\begin{aligned}
g^\prime(8) = \dfrac{1}{f^\prime(2)}
= \dfrac{1}{12}
\end{aligned}
$$

## Example of IFT: Derivative of ln(x)
$f(x)=ln(x)$ is invertible with inverse function $g(y) = e^y$. Since $e^y$ is differentiable for all $y\in \mathbb R$, the IFT tells us that $f(x)=ln(x)$ is differentiable fr all $x>0$ and that
$$
f(x) = \dfrac{1}{g^\prime(f(x))}
\\
= \dfrac{1}{e^{ln(x)}} \\
= \dfrac{1}{x}
$$

# Inverse Trig Functions
We use IFT to evaluate the inverse trig functions
> Definition [arcsin]: Define $arcsin(y) : [-1,1] \rightarrow [-\frac{\pi}{2}, \frac{\pi}{2}]$ by
> $$ arcsin(x) = x \quad \text{iff} \quad sin(x) = y$$
> For $x \in [-\frac{\pi}{2}, \frac{\pi}{2}]$



> Definition [arctan]: Define $arctan(y):\mathbb R \rightarrow (-\frac{\pi}{2}, \frac{\pi}{2})$ by
> $$ arctan(y) = x \quad \text{iff} \quad tan(x)=y$$
> For $x \in (-\frac{\pi}{2}, \frac{\pi}{2})$

> Definition [arccos]: Define $arccos(y) : \mathbb R \rightarrow (0, \pi)$ by 
> $$arccos(y) = x \quad \text{iff} \quad cos(x)=y$$
> For $x \in [0,\pi]$. 


## Derivative of arcsin
$$\dfrac{d}{dx}arcsin(x) = \dfrac{1}{\sqrt{1-x^2}}$$


Proof:

$$
\begin{aligned}
\dfrac{d}{dx}arcsin(x) = \dfrac{1}{\frac{d}{dy}sin(y)} \\
= \dfrac{1}{cos(y)} \\
= \dfrac{1}{\sqrt{1-sin^2(y)}} \\
= \dfrac{1}{\sqrt{1-x^2}}
\end{aligned}
$$
For $x \in (-1,1)$.

## Properties of derivative of arcsin
1. $\dfrac{d}{dx}arcsin(x) = \dfrac{1}{\sqrt{1-x^2}}>0$
2. $\dfrac{d}{dx}arcsin(0) = \dfrac{1}{\sqrt{1-0}} = 1$
3. $\lim\limits_{x\to -1^+}\dfrac{d}{dx}arcsin(x) = \dfrac{1}{\sqrt{1-x^2}} = \infty$
4. $\lim\limits_{x\to 1^-}\dfrac{d}{dx}arcsin(x) = \dfrac{1}{\sqrt{1-x^2}} = \infty$

## Derivative of arccos
Following method above, we obtain
$$
\dfrac{d}{dx}arccos = \dfrac{-1}{\sqrt{1-x^2}}
$$
## Properties of derivative of arccos
1. $\dfrac{d}{dx}arccos(x) = \dfrac{-1}{\sqrt{1-x^2}}<0$
2. $\dfrac{d}{dx}arccos(0) = \dfrac{-1}{\sqrt{1-0}} = 1$
3. $\lim\limits_{x\to -1^+}\dfrac{d}{dx}arccos(x) = \dfrac{-1}{\sqrt{1-x^2}} = -\infty$
4. $\lim\limits_{x\to 1^-}\dfrac{d}{dx}arccos(x) = \dfrac{-1}{\sqrt{1-x^2}} = -\infty$

## Derivative of arctan
$$\dfrac{d}{dx}arctan(x) = \dfrac{1}{1+x^2}$$
Proof:

$$
\begin{aligned}
\dfrac{d}{dx}arctan(x) = \dfrac{1}{\frac{d}{dx}tan(y)} \\
= \dfrac{1}{sec^2(y)} \\
= \dfrac{1}{1+tan^2(y)} \\
= \dfrac{1}{1+tan^2(arctan(x))} \\
= \dfrac{1}{1+x^2}
\end{aligned}
$$

## Properties of derivative of arctan
1. $\dfrac{d}{dx}arctan(x) = \dfrac{1}{1+x^2}>0$
2. $\dfrac{d}{dx}arctan(0) = \dfrac{1}{1+0} = 1$
3. $\lim\limits_{x\to -\infty}\dfrac{d}{dx}arctan(x) = \dfrac{1}{1+\infty} = 0$
4. $\lim\limits_{x\to \infty}\dfrac{d}{dx}arctan(x) = \dfrac{1}{1+\infty} = 0$


# Implicit Differentiation
The relation
$$ x^2 + y^2 =1$$
Implies two functions:
$$f(x) = \sqrt{1-x^2} \quad \text{and} \quad g(x) = -\sqrt{1-x^2}$$
Both of their derivatives are $-\dfrac{x}{y}$. Notice how $f^\prime(x) = -\dfrac{x}{\sqrt{1-x^2}} = -\dfrac{x}{y}$


We obtain this using the chain rule:

$$
\begin{aligned}
\dfrac{d}{dx}\Big(x^2+y^2\Big) = \dfrac{d}{dx} \\
2x+2y\cdot \dfrac{dy}{dx} = 0 \\
\dfrac{dy}{dx} = -\dfrac{x}{y}
\end{aligned}
$$

To get the slope of the tangent line, of an implicit function, we need to solve for $\dfrac{dy}{dx}$ and have two points $(x,y)$ to plug in to get the derivative.

## Caution example
The relation
$$x^4+y^4 = -1-x^2y^2$$
Has no solution since LHS is always positive and RHS is always negative. So the derivative is meaningless.

# Local Extrema
Recall definition of global and global minima.

Recall the EVT. That only applies to global max/mins. What if we want to find the local max/min within a closed interval?

> Definition [Local Extrema]: We say $f(x)$ is a local maximum at $x=c$ if there exists an open interval $(a,b)$ containing $c$ such that
> $$ f(x) \leq f(c)$$
> for every $x \in (a,b)$.
> We say $f(x)$ is a local minimum at $x=c$ if there exists an open interval $(a,b)$ containing $c$ such that
> $$ f(c) \leq f(x)$$
> for every $x \in (a,b)$.

> Definition [Critical Point]: A point $c$ in the domain of $f(x)$ is called a critical point for $f(x)$ if either
> $$f^\prime(c) = 0$$
> or
> $$f^\prime(c) \quad \text{does not exist}$$
>

Concept checks:
1. If $f^\prime(c) = 0$ then $c$ IS NOT NECESSARILY a local minimum or maximum. Example: $f(x) = x^3$ and $f^\prime(0)$
2. If $f(x)$ has a local maximum or minimum at $x=c$, then $f^\prime(c)$ IS NOT NECESSARILY $0$. Example: $f(x) = |x|$ with $f^\prime(0)$ is DNE
3. A point in $(a,b)$ can both be a local and global max/min. An endpoint cannot be a local max/min. 

# Finding Global Max and Min on a Closed Interval
The EVT ensures that a global max and min occurr on the closed interval $[a,b]$.

Assume that $f(x)$ is either a global max or min at $c \in [a,b]$. Then
1. $c$ is an endpoint of the interval $[a,b]$, so $c = a$ or $c=b$.
2. $c$ is not an endpoint of the interval $[a,b]$, so $c \in (a,b)$ is a local max or min. So $c$ is a critical point.

## Strategy for finding global max and min
To find the maximum and minimum of a continuous function $f(x)$ on $[a,b]$:
1. Evaluate $f(a)$ and $f(b)$.
2. Find all critical points $c$ in $(a,b)$ such that $f^\prime(c) = 0$ and $f^\prime(c)$ does not exist, where applicable.
3. Evaluate the function at each of the critical points.
4. The global maximum is the largest value from 1-3. The global minimum is the smallest value from 1-3. 

## Example
Find the max and min values of $f(x) = \dfrac{x^3}{3}-x$ on the closed interval $[-3,2]$. 

1. Evaluate endpoints, we have $f(-3)=-6$ and $f(2) = \frac{2}{3}$.
2. $f^\prime(x) = x^2-1$, so critical points are $x=1$ and $x=-1$.
3. $f(-1) = \frac{2}{3}$ and $f(1) = -\frac{2}{3}$
4. Global max is both $x=-1$ and $x=2$ where the max value is $\frac{2}{3}$ and the global min is at $x=-3$ where the min value is $-6$. 


# Mean Value Theorem
> Theorem [Rolle's Theorem]: If $f(x)$ is continuous on $[a,b]$ and differentiable on $(a,b)$ and that $f(a) = 0 = f(b)$ (i.e. the endpoints are 0), then
> There exists $c \in (a,b)$ with
> $$f^\prime(c) = 0$$

> Theorem [Mean Value Theorem]: Assme that $f(x)$ is continuous on $[a,b]$ and differentiable on $(a,b)$. Then there exists $c \in (a,b)$ with
> $$f^\prime(c) = \dfrac{f(b) - f(a)}{b-a}$$

TODO Proof...

# Antiderivatives
> Definition [Antiderivative]: Given the function $f(x)$, an antiderivative is a function $F(x)$ such that
> $$F^\prime(x) = f(x)$$
> If $F^\prime(x) = f(x)$ for all $x$ in an interval $I$, we say $F(x)$ is an antiderivative for $f(x)$ on $I$. 

> Theorem [Constant Function Theorem]: Assume that $f^\prime(x) = 0$ for all $x \in I$, then there exists a $\alpha \in \mathbb R$ such that $f(x) = \alpha$ for every $x \in I$. 
Proof: by MVT

> Theorem [Antiderivative Theorem]: Assume that $f^\prime(x) = g^\prime(x)$ for all $x\in I$. Then there exists $\alpha$ such that 
> $$f(x) = g(x) + \alpha$$
> for every $x \in I$.


> Theorem [Power Rule for Antiderivatives]: If $\alpha \neq -1$ then:
> $$\int x^\alpha dx = \dfrac{x^{\alpha+1}}{\alpha+1} + C$$


## Examples of Antiderivatives
1. $$\int \dfrac{1}{x}dx = ln(|x|)+C$$
2. $$\int e^x dx = e^x + C
3. $$\int sin(x) dx = -cos(x) +C$$
4. $$\int cos(x)dx = sin(x)+C
5. $$\int sec^2(x)dx = tan(x) + C$$
6. $$\int \dfrac{1}{1+x^2}dx = arctan(x)+C$$
7. $$\int \dfrac{1}{\sqrt{1-x^2}}dx = arcsin(x)+C$$
8. $$\int \dfrac{-1}{\sqrt{1-x^2}}dx = arccos(x)+C$$

# Increasing Function Theorem
> Definition [Increasing and Decreasing Functions]: Suppose that $f(x)$ is defined on an interval $I$. 
> 1. We say that $f(x)$ is *increasing* on $I$ if $f(x_1) < f(x_2)$ for all $x_1,x_2 \in I$ with $x_1 < x_2$.
> 2. We say that $f(x)$ is *increasing* on $I$ if $f(x_1) > f(x_2)$ for all $x_1,x_2 \in I$ with $x_1 < x_2$. 
> 3. $f(x)$ is *non-decreasing* on $I$ if $f(x_1) \leq f(x_2)$ for all $x_1, x_2 \in I$ with $x_1 \leq x_2$. 
> $f(x)$ is *non-decreasing* on $I$ if $f(x_1) \leq f(x_2)$ for all $x_1, x_2 \in I$ with $x_1 \geq x_2$. 

Question: IF $f(x)$ is increasing on an interval $I$ and differentiable on $I$, then must $f^\prime(x) > 0$ for all $x \in I$?

Answer: No. Consider $x^3$ which is increasing but $f^\prime(0) = 0$. 

Question: Is $f(x) = x^3$ is increasing on $[0,1]$? 

Answer: Yes. 

If $f(x)$ is everywher edifferentiable and if $f^\prime(c) > 0$, does this mean that there is an open interval $(a,b)$ containing $c$ on which $f(x)$ is increasing?

Answer: No. 


# Bounded Derivative Theorem

> Theorem [Bounded Derivative Theorem]: Assume that $f(x)$ is continuous on $[a,b]$ and differentialle on $(a,b)$ an that 
> $$ m \leq f^\prime(x) \leq M$$
> for each $x\in (a,b)$. Then
> $$f(a) + m(x-a) \leq f(x) \leq f(a) + M(x-a)$$
> for all $x \in [a,b]$. 

Example: Assume that $f(0) = 3$ and that $1 \leq f^\prime(x) \leq 2$ for all $x \in [0,1]$. Show that 
$$4 \leq f(1) \leq 5$$

Solution: By bounded derivative theorem, know that 
$$f(0) + 1(1-0) \leq f(1) \leq f(0) + 2(1-0)$$
So
$$4 = 3 + 1 \leq f(1) \leq 3 + 2 = 5$$

> Comparing Functions Theorem:
> Assume that $f(x)$ and $g(x)$ are continuous at $x=a$ with $f(a) = g(a)$.
> 1. If both $f(x)$ and $g(x)$ are differentiable for $x>a$ and if $f^\prime(x) \leq g^\prime(x)$ for all $x>a$ then
> $$f(x) \leq g(x)$$
> for all $x > a$.
> If both $f(x)$ and $g(x)$ are differentiable for $x<a$ and if $f^\prime(a) \leq g^\prime(x)$ for all $x<a$ then
> $$f(x) \geq g(x)$$
> for all $x < a$. 

Example: Show that 
$$x - \frac{x^2}{2} < ln(x+1) < x$$
for all $x>0$.

Notice that $f(0 ) = g(0) = h(0) = 0$. And $f^\prime(x) = 1-x, g^\prime(x) = \frac{1}{x+1}, h^\prime(x) = 1$. For all $x > 0$, we have
$$g^\prime(x) = \dfrac{1}{x+1} < h^\prime(x) = 1$$
So $g(x) < h(x)$. We observe the same and can conclude $f(x) < g(x)$. 

# Lhopital's rule (pt 1.)
> Theorem [LHopital's Rule]: Assume that $f^\prime(x)$ and $g^\prime(x)$ exist near $x=a$, $g^\prime(x) \neq 0$ near $x=a$ except possibly at $x=a$, and that $\lim\limits_{x \to a}\dfrac{f(x)}{g(x)}$ is an indeterminate form of type $\frac{0}{0}$ or $\frac{\infty}{\infty}$. Then
> $$\lim\limits_{x\to a} \dfrac{f(x)}{g(x)} = \lim\limits_{x\to a}\dfrac{f^\prime(x)}{g^\prime(x)}$$
> provided that the latter limit exists or is $\infty$ or $-\infty$. 

**Must first check if limit evaluates to the following five indeterminate forms:**
1. $\frac{0}{0}$
2. $\pm \frac{\infty}{\infty}$
3. $0 \cdot \infty$
4. $\infty - \infty$
5. $1^\infty$
6. $\infty^0$
7. $0^0$



## Example: 
Evaluate 
$$\lim\limits_{x\to 0}\dfrac{e^x -1-x}{x^2}$$

Notice that at limit as x approahces 0 of $e^x-1-x = 0$ and $x^2 = 0$. So we apply Lhopital's rule to obtain
$$\dfrac{e^x-1}{2x}$$
But also notice that $e^x-1 = 0$ and $2x  =0$ as $x$ approaches 0. So we can apply Lhopital's rule again to get
$$\dfrac{e^2}{2}$$
Which when evaluated as limit goes to 0, we have $\dfrac{1}{2}$.

## Cautionary example
Evaluate 
$$\lim\limits_{x \to 0^+}\dfrac{e^x - 1}{x^2}$$

Notice that denominator and numerator both evaluate to 0. Applying Lhopital's rule once, we have
$$\dfrac{e^x}{2x}$$
**Although $2x =0$, we have $e^x = 1 \neq 0$ So we cannot use Lhopital's rule again. We should stop here and conclude that the limit tends to $\infty$.**
# Concavity 

Observe that a function is concave upwards if the secant line of any two points on the function lie above the function

Similarly, a function is concave down if the secant line of the two points on the function lie below it.

> Definition [Concave Upwards / Downwards]: The graph of $f(x)$ is concave upwards / downwards on an interval $I$ if for every pair of points $a$ and $b$ on $I$ the secant line joining $(a, f(a))$ and $(b, f(b))$ lies above / below the graph of $f(x)$. 

> Theorem [Second Derivative Test for Concativty]: If $f^{\prime\prime}(x) > 0$ for each $x$ in an interval $I$ then the graph of $f(x)$ is concave upwards on $I$. 
> If $f^{\prime\prime}(x) < 0$ for each $x$ in an interval $I$ then the graph of $f(x)$ is concave downwards on $I$. 

## Inflection points
> Definition: [Inflection Point] A point $c$ is called an inflection point for the function $f(x)$ if:
> 1. $f(x)$ is continuous at $x = c$ and
> 2. the concavity of $f(x)$ changes at $x = c$


> Theorem [Testing for inflection points]: If $f^{\prime\prime}(x)$ is continuous at $x = c$ and $(c,f(c))$ is an inflection point for $f(x)$ then
> $$f^{\prime\prime}(c) = 0$$

WARNING: $f^{\prime\prime}(c) = 0$ does not guarantee an inflection point occurs at $x = c$. 

Example 1: $f(x) = x^3$ and $f^{\prime\prime}(x)=6x$. We have that $f^{\prime\prime}(x) > 0$ when $x < 0$ so $f(x)$ is concave down when $x < 0$. Also concave up when $x > 0$.  

Has point of inflection at $x =0$. 

Example 2: $f(x) = x^4$ and $f^{\prime\prime}(x)= 12x^2$. We have $f^{\prime\prime}(x) > 0$ for all $x \neq 0$ so $f(x)$ is concave upwards on $\mathbb R$. 

f^{\prime\prime}(0) = 0$ but the function does not have a point of inflection at $x = 0$. 


# First Derivative Test
Problem: Given a critical point $c$ for $f(x)$ how can we determine if it is a local max or local min?

> Theorem [First Derivative Test]: Assume that $c$ is continuous at $c$. 
> 1. If there is an interval $(a,b)$ containing $c$ such that $f^\prime(x) < 0$ for all $x \in (a, c)$ and $f^\prime(x) > 0$ for all $x \in (c,b)$ **then $f(x)$ has a local minimum at $x = c$.**
> 2. If there is an interval $(a,b)$ containing $c$ such that $f^\prime(x) > 0$ for all $x \in (a,c)$ and $f^\prime(x) < 0$ for all $x \in (c,b)$ **then $f(x)$ has a local minimum at $x = c$.**

# Curve Sketching
## Strategy: Part 1
1. Determine the fomain of $f(x)$. 
2. Determine any symmetries that the graph might have. In particular, test to see if the function is either even or odd.
3. Determine, if possible, where the function changes sign and plot these points
4. Find any discontinuity points for $f(x)$. 
5. Evaluate the relevant one-sided and two-sided limits at thep oints of discontinuity and identify the nature of the discontinuities. Indicate removable discontinuities with a small circle.
6. Using information from step 5, draw vertical asymptotes.
7. Find any horizontal asymptotes by evaluating the limits of the function and $\pm \infty$ if applicable. 

## Strategy: Part 2
8. Calculate $f^\prime(x)$. 
9. Identify any critical points, locate where $f^\prime(x) = 0$ or where $f^\prime(x)$ does not exist.
10. Determine where $f(x)$ is increasing or decreasing by analysing the sign of $f^\prime(x)$ between the critical points.
11. Test the critical points to see if they are local maxima / minima / neither
12. Find $f^{\prime\prime}(x)$. 
13. Locate where $f^{\prime\prime}(x) = 0$ or where it does not exist. Determine concavity by analysing its sign.
14. Identify points of inflection (where concavity changes). 

# Taylor Polynomials
> Definition [Taylor Polynomials]: Assume that $f(x)$ is $n$ times differentiable at $x = a$. Then the $n$-th degree Taylor polynomial for $f(x)$ centered at $x=a$ is the polynomial
> $$T_{n,a}(x) = \sum_{k=0}^n \dfrac{f^{(k)}(a)}{k!}(x-a)^k$$
> $$= f(a)+f^\prime(a)(x-a) + \dfrac{f^{\prime\prime}(a)}{2!}(x-a)^2 + \dots$$

> Definition [Taylor Remainder]: Assume that $f(x)$ is $n$ times differentable at $x=a$. Let 
> $$R_{n,a}(x) = f(x) - T_{n,a}(x)$$
> $R_{n,a}(x)$ is called the $n$-th degree Taylor remainder function centered at $x=a$. 

> Theorem [Taylor's Theorem]: Assume that $f$ is $n+1$ times differentiable on an interval $I$ containing $x=a$. Let $x \in I$. Then there exists a point $c$ between $x$ and $a$ such that
> $$f(x)-T_{n,a}(x) = R_{n,a}(x) = \dfrac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$$

