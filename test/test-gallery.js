// correct class name
// correct number of images rendered
// each image has correct props set

var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Gallery = require('../js/components/gallery');

describe('Gallery component', function() {
    it('Renders the images',  function() {
        var images = [{url:"text url", description:"description"},
                    {url:"text1 url", description:"description1"},
                    {url:"text2 url", description:"description2"}
        
        ]
    

        var renderer = TestUtils.createRenderer();
        renderer.render(<Gallery images={images} />);
        var result = renderer.getRenderOutput();
        result.props.className.should.equal('gallery');
        result.props.children.length.should.equal(images.length);

        var img = result.props.children[0];
        img.props.url.should.equal('text url');
        img.props.description.should.equal('description');
        
    });
});