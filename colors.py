from random import randint
import copy
import json
import colorsys


def rgb_to_hex(rgb_tuple):
    return '%02X%02X%02X' % (rgb_tuple)


def affix_hashtag(hexcode):
    return '#%s' % hexcode


def random_rgb():
    return (randint(0, 255), randint(0, 255), randint(0, 255))


def get_color_family(rgb_tuple):
    r = rgb_tuple[0] / 255
    g = rgb_tuple[1] / 255
    b = rgb_tuple[2] / 255
    hue, luminosity, saturation = colorsys.rgb_to_hls(r, g, b)

    if luminosity < 0.2 or (luminosity < 0.25 and saturation < 0.25):
        return "black"
    elif luminosity > 0.8:
        return "white"

    if saturation < 0.25:
        return "gray"

    hue *= 360
    if hue < 30:
        return "red"
    elif hue < 60:
        if saturation < 0.32:
            return "brown"
        return "orange"
    elif hue < 90:
        if saturation < 0.32:
            return "brown"
        return "yellow"
    elif hue < 150:
        return "green"
    elif hue < 210:
        return "cyan"
    elif hue < 270:
        return "blue"
    elif hue < 335:
        return "magenta"
    else:
        return "pink"


def get_shade(rgb, factor):
    """Takes RGB tuple, adjusts values by a passed factor,
    and returns the resultant hexcode"""
    rgb_copy = list(copy.copy(rgb))
    for i, hue in enumerate(rgb_copy):
        rgb_copy[i] = validate_hue(hue + factor)

    return rgb_to_hex(tuple(rgb_copy))


def validate_hue(hue):
    """Prevent any of RGB from being negative or larger than 255"""
    if hue > 255:
        hue = 255
    elif hue < 0:
        hue = 0
    return hue


def get_shades(rgb):
    """Take a hexcode string, and return a dictionary of surrounding shades.
    All bitwise operations are credited to Chris Coyier from CSS Tricks."""

    return {
        'darkest': affix_hashtag(get_shade(rgb, -50)),
        'darker': affix_hashtag(get_shade(rgb, -25)),
        'lighter': affix_hashtag(get_shade(rgb, 25)),
        'lightest': affix_hashtag(get_shade(rgb, 50))
    }


def create_color_object(id):
    color_rgb = random_rgb()
    color_hex = rgb_to_hex(color_rgb)
    return {
        'id': id,
        'color': affix_hashtag(color_hex),
        'family': get_color_family(color_rgb),
        'shades': get_shades(color_rgb)
    }


colors_json = json.dumps([create_color_object(i) for i in range(100)], sort_keys=True)
print(colors_json)
