# Animations

How do animations add impact to websites?

- They Can Improve Engagement and Conversion.
- It makes us be able to tell stories and communicate emotions and ideas in a unique, easy-to-perceive way that everyone could understand.
- They help users navigate the app by understanding the connections between various interface elements.
- Web animation can be used to attract attention, engage people better, and communicate more clearly and effectively.

But, be careful, Animations everywhere could affect on App performance.

## Framer motion For React - Basics

1. Simple Animation

2. Exit Animation

   - to perform an exit animation, element should be wrapped between AnimationPresence

3. variants

   - Setting animation as an object

4. keyframes

   - Values in animate can also be set as a series of keyframes. This will animate through each value in sequence.

   ```javascript
         animate={{
           scale: [1, 2, 2, 1, 1],
           rotate: [0, 0, 270, 270, 0],
           borderRadius: ["20%", "20%", "50%", "50%", "20%"],
       }}
   ```

5. Gestures

   - Framer Motion has shortcuts for animating to a set of values when gestures start, like hover, tap, drag, focus and inView.

6. Drag

   - A component can be made draggable with the addition of the drag prop. Lock it to either axis by setting drag to "x" or "y".

7. Manual controls

   - Framer motion provides useAnimation hook can be used to manually start/stop animations, and compose them together.

8. MotionValues

   - Motion uses MotionValues to track the state and velocity of every animating value.

9. Layouts
   - CSS layouts are difficult and expensive to animate.
     Sometimes it doesn't even make sense. What does it actually mean to animate justify-content between flex-start and flex-end?

- clientWidth is the inner width (ie. the space inside an element including padding but excluding borders and scrollbars)

- offsetWidth is the outer width (ie. the space occupied by the element, including padding and borders)

- scrollWidth is the total width including stuff that is only visible if you scroll
