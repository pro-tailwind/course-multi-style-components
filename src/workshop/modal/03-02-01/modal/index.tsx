import React from 'react'

import Modal from './modal'
import Button from '../button'

export default function ModalDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <main>
      {/* 
      ------------------------------
      We use the `isOpen` piece of state to show/hide the modal.
      The `setIsOpen` function is passed to the modal as an
      `onClose` prop.
      ------------------------------
    */}
      {isOpen && <Modal open={isOpen} onClose={() => setIsOpen(false)} />}

      {/* 
      ------------------------------
      Below this point, we have a `Button` component that toggles
      the modal window, as well as some page copy to demo how 
      the modal affects (or not) the page scrolling.
      ------------------------------
    */}

      <div className="prose prose-slate my-12 mx-auto lg:prose-lg">
        {/* The modal toggle */}
        <Button impact="light" onClick={() => setIsOpen(true)}>
          Open dialog
        </Button>

        {/* Sample copy to demo scroll locking */}
        <h1 className="!mt-16">This is the page copy</h1>
        <p className="lead">
          Until now, trying to style an article, document, or blog post with Tailwind has been a
          tedious task that required a keen eye for typography and a lot of complex custom CSS.
        </p>
        <p>
          By default, Tailwind removes all of the default browser styling from paragraphs, headings,
          lists and more. This ends up being really useful for building application UIs because you
          spend less time undoing user-agent styles, but when you <em>really are</em> just trying to
          style some content that came from a rich-text editor in a CMS or a markdown file, it can
          be surprising and unintuitive.
        </p>
        <p>
          We get lots of complaints about it actually, with people regularly asking us things like:
        </p>
        <blockquote>
          <p>
            Why is Tailwind removing the default styles on my <code>h1</code> elements? How do I
            disable this? What do you mean I lose all the other base styles too?
          </p>
        </blockquote>
        <p>
          We hear you, but we're not convinced that simply disabling our base styles is what you
          really want. You don't want to have to remove annoying margins every time you use a{' '}
          <code>p</code> element in a piece of your dashboard UI. And I doubt you really want your
          blog posts to use the user-agent styles either — you want them to look <em>awesome</em>,
          not awful.
        </p>
        <p>
          The <code>@tailwindcss/typography</code> plugin is our attempt to give you what you{' '}
          <em>actually</em> want, without any of the downsides of doing something stupid like
          disabling our base styles.
        </p>
        <p>
          It adds a new <code>prose</code> class that you can slap on any block of vanilla HTML
          content and turn it into a beautiful, well-formatted document:
        </p>
        <pre>
          <code className="language-html">
            &lt;article className="prose"&gt; &lt;h1&gt;Garlic bread with cheese: What the science
            tells us&lt;/h1&gt; &lt;p&gt; For years parents have espoused the health benefits of
            eating garlic bread with cheese to their children, with the food earning such an iconic
            status in our culture that kids will often dress up as warm, cheesy loaf for Halloween.
            &lt;/p&gt; &lt;p&gt; But a recent study shows that the celebrated appetizer may be
            linked to a series of rabies cases springing up around the country. &lt;/p&gt; &lt;!--
            ... --&gt; &lt;/article&gt;
          </code>
        </pre>
        <p>
          For more information about how to use the plugin and the features it includes,{' '}
          <a href="https://github.com/tailwindcss/typography/blob/master/README.md">
            read the documentation
          </a>
          .
        </p>
        <hr />
        <h2>What to expect from here on out</h2>
        <p>
          What follows from here is just a bunch of absolute nonsense I've written to dogfood the
          plugin itself. It includes every sensible typographic element I could think of, like{' '}
          <strong>bold text</strong>, unordered lists, ordered lists, code blocks, block quotes,{' '}
          <em>and even italics</em>.
        </p>
        <p>It's important to cover all of these use cases for a few reasons:</p>
        <ol>
          <li>We want everything to look good out of the box.</li>
          <li>Really just the first reason, that's the whole point of the plugin.</li>
          <li>
            Here's a third pretend reason though a list with three items looks more realistic than a
            list with two items.
          </li>
        </ol>
        <p>Now we're going to try out another header style.</p>
        <h3>Typography should be easy</h3>
        <p>
          So that's a header for you — with any luck if we've done our job correctly that will look
          pretty reasonable.
        </p>
        <p>Something a wise person once told me about typography is:</p>
        <blockquote>
          <p>
            Typography is pretty important if you don't want your stuff to look like trash. Make it
            good then it won't be bad.
          </p>
        </blockquote>
        <p>
          Now I'm going to show you an example of an unordered list to make sure that looks good,
          too:
        </p>
        <ul>
          <li>So here is the first item in this list.</li>
          <li>In this example we're keeping the items short.</li>
          <li>Later, we'll use longer, more complex list items.</li>
        </ul>
        <p>And that's the end of this section.</p>
        <h2>What if we stack headings?</h2>
        <h3>We should make sure that looks good, too.</h3>
        <p>
          Sometimes you have headings directly underneath each other. In those cases you often have
          to undo the top margin on the second heading because it usually looks better for the
          headings to be closer together than a paragraph followed by a heading should be.
        </p>
        <h3>When a heading comes after a paragraph …</h3>
        <p>
          When a heading comes after a paragraph, we need a bit more space, like I already mentioned
          above. Now let's see what a more complex list would look like.
        </p>
        <ul>
          <li>
            <p>
              <strong>I often do this thing where list items have headings.</strong>
            </p>
            <p>
              For some reason I think this looks cool which is unfortunate because it's pretty
              annoying to get the styles right.
            </p>
            <p>
              I often have two or three paragraphs in these list items, too, so the hard part is
              getting the spacing between the paragraphs, list item heading, and separate list items
              to all make sense. Pretty tough honestly, you could make a strong argument that you
              just shouldn't write this way.
            </p>
          </li>
          <li>
            <p>
              <strong>Since this is a list, I need at least two items.</strong>
            </p>
            <p>
              I explained what I'm doing already in the previous list item, but a list wouldn't be a
              list if it only had one item, and we really want this to look realistic. That's why
              I've added this second list item so I actually have something to look at when writing
              the styles.
            </p>
          </li>
          <li>
            <p>
              <strong>It's not a bad idea to add a third item either.</strong>
            </p>
            <p>
              I think it probably would've been fine to just use two items but three is definitely
              not worse, and since I seem to be having no trouble making up arbitrary things to
              type, I might as well include it.
            </p>
          </li>
        </ul>
        <p>
          After this sort of list I usually have a closing statement or paragraph, because it kinda
          looks weird jumping right to a heading.
        </p>
        <h2>Code should look okay by default.</h2>
        <p>
          I think most people are going to use <a href="https://highlightjs.org/">highlight.js</a>{' '}
          or <a href="https://prismjs.com/">Prism</a> or something if they want to style their code
          blocks but it wouldn't hurt to make them look <em>okay</em> out of the box, even with no
          syntax highlighting.
        </p>
        <p>
          Here's what a default <code>tailwind.config.js</code> file looks like at the time of
          writing:
        </p>
        <p>Hopefully that looks good enough to you.</p>
        <h3>What about nested lists?</h3>
        <p>
          Nested lists basically always look bad which is why editors like Medium don't even let you
          do it, but I guess since some of you goofballs are going to do it we have to carry the
          burden of at least making it work.
        </p>
        <ol>
          <li>
            <strong>Nested lists are rarely a good idea.</strong>
            <ul>
              <li>
                You might feel like you are being really "organized" or something but you are just
                creating a gross shape on the screen that is hard to read.
              </li>
              <li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li>
              <li>Nesting tons of folders in your source code is also not helpful.</li>
            </ul>
          </li>
          <li>
            <strong>Since we need to have more items, here's another one.</strong>
            <ul>
              <li>I'm not sure if we'll bother styling more than two levels deep.</li>
              <li>Two is already too much, three is guaranteed to be a bad idea.</li>
              <li>If you nest four levels deep you belong in prison.</li>
            </ul>
          </li>
          <li>
            <strong>Two items isn't really a list, three is good though.</strong>
            <ul>
              <li>
                Again please don't nest lists if you want people to actually read your content.
              </li>
              <li>Nobody wants to look at this.</li>
              <li>I'm upset that we even have to bother styling this.</li>
            </ul>
          </li>
        </ol>
        <p>
          The most annoying thing about lists in Markdown is that <code>&lt;li&gt;</code> elements
          aren't given a child <code>&lt;p&gt;</code> tag unless there are multiple paragraphs in
          the list item. That means I have to worry about styling that annoying situation too.
        </p>
        <ul>
          <li>
            <p>
              <strong>For example, here's another nested list.</strong>
            </p>
            <p>But this time with a second paragraph.</p>
            <ul>
              <li>
                These list items won't have <code>&lt;p&gt;</code> tags
              </li>
              <li>Because they are only one line each</li>
            </ul>
          </li>
          <li>
            <p>
              <strong>But in this second top-level list item, they will.</strong>
            </p>
            <p>This is especially annoying because of the spacing on this paragraph.</p>
            <ul>
              <li>
                <p>
                  As you can see here, because I've added a second line, this list item now has a{' '}
                  <code>&lt;p&gt;</code> tag.
                </p>
                <p>This is the second line I'm talking about by the way.</p>
              </li>
              <li>
                <p>Finally here's another list item so it's more like a list.</p>
              </li>
            </ul>
          </li>
          <li>
            <p>A closing list item, but with no nested list, because why not?</p>
          </li>
        </ul>
        <p>And finally a sentence to close off this section.</p>
      </div>
    </main>
  )
}
